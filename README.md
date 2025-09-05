# Chatbot de Ventas con IA

Este proyecto es un chatbot avanzado diseñado para mejorar la interacción con clientes y automatizar procesos de ventas. Utiliza inteligencia artificial para mantener conversaciones fluidas y naturales, y es capaz de responder preguntas complejas sobre productos o servicios.

El chatbot se integra fácilmente en cualquier página web como un widget interactivo y también ofrece la posibilidad de iniciar una llamada de voz para una asistencia más directa y personalizada.

*(Sugerencia: ¡Considera añadir un GIF aquí mostrando el chatbot en acción!)*

---

## 🚀 Características Principales

-   **Asistente Virtual con IA**: Conversaciones en tiempo real impulsadas por la API de OpenAI, capaces de entender el contexto y responder de manera coherente.
-   **Widget de Chat Interactivo**: Un componente de chat moderno y fácil de usar que se puede incrustar en cualquier sitio web.
-   **Respuestas en Tiempo Real (Streaming)**: Los usuarios ven las respuestas del asistente a medida que se generan, creando una experiencia de usuario dinámica y fluida.
-   **Llamadas de Voz Inteligentes**: Integración con Vapi para escalar la conversación a una llamada de voz, donde el usuario puede hablar directamente con el asistente de IA.
-   **Interfaz de Usuario Atractiva**: Diseñada con Tailwind CSS y Shadcn UI, siguiendo principios de diseño modernos para una experiencia de usuario excepcional.

---

## 🛠️ Stack Tecnológico

-   **Frontend**: Next.js, React, TypeScript
-   **Estilos**: Tailwind CSS, Shadcn UI
-   **Inteligencia Artificial**: OpenAI API (Assistants)
-   **Comunicaciones por Voz**: Vapi AI
-   **Despliegue**: Vercel

---

<details>
<summary>⚙️ Instrucciones para Desarrolladores (Instalación y Uso)</summary>

### Prerrequisitos

-   Node.js (v20+)
-   npm, yarn, pnpm, o bun

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**

    Crea un archivo `.env.local` en la raíz del proyecto (puedes usar `.env.example` como plantilla) y añade tus claves de API:

    ```
    # Configuración de OpenAI
    OPENAI_API_KEY="tu_clave_de_api_de_openai"
    OPENAI_ASSISTANT_ID="tu_id_de_asistente_de_openai"

    # Configuración de VAPI
    NEXT_PUBLIC_VAPI_API_KEY="tu_clave_de_api_de_vapi"
    NEXT_PUBLIC_VAPI_ASSISTANT_ID="tu_id_de_asistente_de_vapi"
    ```

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

</details>
