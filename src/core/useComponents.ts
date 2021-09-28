import { App } from 'vue'
import { Button } from 'ant-design-vue'

const useComponents = (app: App): void => {
  app
    .use(Button)
}

export default useComponents
