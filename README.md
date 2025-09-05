# Chatbot de Ventas HITO

Este es un proyecto de un chatbot de ventas interactivo construido con Next.js, TypeScript y la API de OpenAI. El chatbot está diseñado para responder a las preguntas de los usuarios y puede ser integrado en cualquier sitio web. También incluye una funcionalidad de llamada de voz a través de Vapi.

## Características

-   **Chat Interactivo**: Un componente de chat en tiempo real que se comunica con un Asistente de OpenAI.
-   **Streaming de Respuestas**: Las respuestas del asistente se muestran en tiempo real a medida que se generan.
-   **Llamadas de Voz**: Integración con Vapi para permitir a los usuarios hablar con el asistente.
-   **UI Moderna**: Construido con Tailwind CSS y Shadcn UI para una interfaz de usuario limpia y moderna.
-   **Desplegable en Vercel**: Listo para ser desplegado en Vercel con configuración mínima.

## Empezando

Sigue estas instrucciones para tener una copia del proyecto corriendo en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Necesitarás tener Node.js (versión 20 o superior) y npm (o yarn/pnpm/bun) instalados en tu máquina.

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

    Crea un nuevo archivo llamado `.env.local` en la raíz de tu proyecto. Puedes copiar el archivo de ejemplo `.env.example` para empezar:

    ```bash
    cp .env.example .env.local
    ```

    Ahora, abre el archivo `.env.local` y añade tus claves de API y IDs de asistente:

    ```
    # OpenAI Configuration
    OPENAI_API_KEY="tu_openai_api_key_aqui"
    OPENAI_ASSISTANT_ID="tu_openai_assistant_id_aqui"

    # VAPI Configuration
    # Asegúrate de que estas variables tengan el prefijo NEXT_PUBLIC_ para que estén disponibles en el navegador
    NEXT_PUBLIC_VAPI_API_KEY="tu_vapi_api_key_aqui"
    NEXT_PUBLIC_VAPI_ASSISTANT_ID="tu_vapi_assistant_id_aqui"
    ```

    -   `OPENAI_API_KEY`: Tu clave secreta de la API de OpenAI.
    -   `OPENAI_ASSISTANT_ID`: El ID de tu Asistente de OpenAI.
    -   `NEXT_PUBLIC_VAPI_API_KEY`: Tu clave pública de la API de Vapi.
    -   `NEXT_PUBLIC_VAPI_ASSISTANT_ID`: El ID de tu Asistente de Vapi (el ID del bot de voz).

4.  **Corre el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Despliegue

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new) de los creadores de Next.js.

Asegúrate de configurar las variables de entorno en tu proyecto de Vercel antes de desplegar.

## Construido Con

-   [Next.js](https://nextjs.org/) - El framework de React para producción.
-   [OpenAI](https://openai.com/) - Para la funcionalidad del asistente de IA.
-   [Vapi](https://vapi.ai/) - Para la funcionalidad de llamadas de voz.
-   [Tailwind CSS](https://tailwindcss.com/) - Para los estilos CSS.
-   [Shadcn UI](https://ui.shadcn.com/) - Para los componentes de la interfaz de usuario.
-   [TypeScript](https://www.typescriptlang.org/) - Para un tipado de código robusto.
