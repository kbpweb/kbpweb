import '../styles/globals.css'
import { Menu } from '../components/atomic design/organisms/Menu/Menu'
import WelcomePage from '../components/layouts/WelcomePage/WelcomePage'
import CookieContainer from '../components/atomic design/organisms/Cookies/CookieContainer'

export default function App() {
  return(
    <>
      <Menu />
      <WelcomePage />

      <CookieContainer />
    </>
  )
}
