import {boot} from 'quasar/wrappers'
import {MainLayoutModule} from 'layouts/MainLayout'

export default boot(({}) => {
  const mainLayoutModule = new MainLayoutModule()
  mainLayoutModule.install()
})
