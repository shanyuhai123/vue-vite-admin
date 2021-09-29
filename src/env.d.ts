/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_PORT: string
  readonly VITE_APP_PUBLIC_PATH: string
  readonly VITE_APP_TITLE: string

  readonly VITE_APP_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
