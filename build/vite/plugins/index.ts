import { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'
import { htmlTitlePlugin } from './html'
import { ViteEnv } from '@/types'

export const createVitePlugins = (mode: string, viteEnv: ViteEnv) => {
  const vitePlugins: (Plugin | Plugin[]) = [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index.less`
          }
        }
      ]
    })
  ]

  vitePlugins.push(htmlTitlePlugin(viteEnv))

  return vitePlugins
}
