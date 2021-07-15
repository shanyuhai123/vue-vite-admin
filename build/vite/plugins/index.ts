import { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export const createVitePlugins = () => {
  const vitePlugins: (Plugin | Plugin[]) = [
    vue(),
    vueJsx()
  ]

  return vitePlugins
}