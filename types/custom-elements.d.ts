// types/custom-elements.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': {
      'agent-id'?: string;
      [key: string]: any;
    };
  }
}