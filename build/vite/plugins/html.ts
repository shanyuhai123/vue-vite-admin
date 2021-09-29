import { Plugin } from 'vite'
import { ViteEnv } from '@/types'

export const htmlTitlePlugin = (viteEnv: ViteEnv): Plugin => {
  return {
    name: 'html-title-plugin',
    transformIndexHtml (html: string): string {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>${viteEnv.VITE_APP_TITLE}</title>`
      )
    }
  }
}
