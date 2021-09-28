export interface ViteEnv {
  VITE_APP_PORT: string
  VITE_APP_PUBLIC_PATH: string
  VITE_APP_TITLE: string

  VITE_APP_API_BASE_URL: string
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
