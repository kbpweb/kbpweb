import TitleView from '../../../components/atomic design/organisms/WelcomeTitle/TitleView'
import {text} from '../../../content/WelcomeTitle/subheader'
import BackgroundView from '../../atomic design/organisms/WelcomeBackground/BackgroundView'

export default function WelcomePage() {
  return(
    <>
      <TitleView header='agencja interaktywna' subheader={text}/>
      <BackgroundView />
    </>
  )
}
