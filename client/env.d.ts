/// <reference types="vite/client" />
// https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html


// https://vitejs.dev/guide/env-and-mode#intellisense-for-typescript
interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}