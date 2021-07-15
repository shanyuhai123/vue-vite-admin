import { UserConfig } from 'vite'
import { createVitePlugins } from './build/vite/plugins'

// https://vitejs.dev/config/
export default (): UserConfig => {
  return {
    plugins: createVitePlugins()
  }
}
