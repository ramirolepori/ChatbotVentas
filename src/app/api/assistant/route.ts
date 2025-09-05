// src/app/api/assistant/route.ts

import OpenAI from "openai";
import { EventEmitter } from "events";

export const runtime = "edge"; // Habilitar el runtime Edge

const openai = new OpenAI();

export async function POST(req: Request) {
  const { prompt, threadId } = await req.json();
  console.log("Prompt recibido:", prompt, "ThreadId recibido:", threadId);

  const encoder = new TextEncoder();

  // Variable para acumular la respuesta del asistente
  let assistantResponse = "";

  // OBTENER O CREAR EL HILO
  let currentThreadId = threadId;
  if (!currentThreadId) {
    // No hay threadId; creamos un hilo nuevo
    const thread = await openai.beta.threads.create();
    currentThreadId = thread.id;
    console.log("Nuevo hilo creado con ID:", currentThreadId);
  } else {
    // Ya tenemos un hilo en uso
    console.log("Usando hilo existente con ID:", currentThreadId);
  }

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Agregar el mensaje del usuario
        await openai.beta.threads.messages.create(currentThreadId, {
          role: "user",
          content: prompt,
        });

        // Iniciar el proceso de streaming de la respuesta
        const run = openai.beta.threads.runs.stream(currentThreadId, {
          assistant_id: process.env.OPENAI_ASSISTANT_ID!,
        });

        // Manejar eventos del stream
        run.on("textCreated", () => {
          const chunk = encoder.encode(""); //assistant >
          controller.enqueue(chunk);
        });

        run.on("textDelta", (textDelta) => {
          // Acumular el texto de la respuesta del asistente
          assistantResponse += textDelta.value;

          const chunk = encoder.encode(textDelta.value);
          controller.enqueue(chunk);
        });

        run.on("error", (err) => {
          console.error("Error en el stream:", err);
          controller.error(err);
        });

        // Escuchar el evento 'end' para saber cuándo ha terminado el streaming
        (run as unknown as EventEmitter).on("end", () => {
          // Enviamos un chunk final con el threadId para que el cliente lo “pesque”
          const finalChunk = `[HITO_THREAD_ID]:${currentThreadId}`;
          const chunk = encoder.encode(finalChunk); //assistant >
          controller.enqueue(chunk);
          controller.close();

          // Imprimir la respuesta completa del asistente en consola
          console.log("Respuesta del asistente:", assistantResponse);
        });
      } catch (error) {
        console.error("Error en la API:", error);
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Transfer-Encoding": "chunked",
    },
  });
}
