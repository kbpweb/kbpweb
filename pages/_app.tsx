import '../styles/globals.css'
import { Menu } from '../components/atomic design/organisms/Menu/Menu'
import WelcomePage from '../components/layouts/WelcomePage/WelcomePage'
import CookieContainer from '../components/atomic design/organisms/Cookies/CookieContainer'
import { Provider } from 'react-redux';
import {wrapper} from '../redux/store/store'

export default function App({...rest}) {
  const {store, props} = wrapper.useWrappedStore(rest)
  return(
    <>
      <Provider store={store}>
        <Menu />
        <WelcomePage />

        <CookieContainer />
      </Provider>
    </>
  )
}
