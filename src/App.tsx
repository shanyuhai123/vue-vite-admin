
import { defineComponent } from 'vue'
import Fuck from './components/Fuck'

export default defineComponent({
  name: 'App',
  setup () {
    return () => (
      <Fuck />
    )
  }
})
