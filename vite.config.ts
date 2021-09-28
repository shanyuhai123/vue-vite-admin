import { join } from 'path'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import { createVitePlugins } from './build/vite/plugins'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default ({ mode } : ConfigEnv): UserConfig => {
  const env = loadEnv(mode, CWD)
  const { VITE_APP_PUBLIC_PATH, VITE_APP_PORT } = env

  return {
    base: VITE_APP_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': join(__dirname, './src')
      }
    },
    plugins: createVitePlugins(mode, env),
    server: {
      port: Number(VITE_APP_PORT)
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
}
