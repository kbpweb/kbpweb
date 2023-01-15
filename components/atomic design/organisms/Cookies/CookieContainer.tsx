import React, {ReactNode, useEffect, useState} from 'react'
import Circle from '../../atoms/WelcomeBackground/Circle'
import {description} from '../../../../content/Cookies/cookies_desc'
import CookiesTitle from '../../atoms/Cookies/CookiesTitle'
import CookiesDescription from '../../atoms/Cookies/CookiesDescription'
import CookiesButton from '../../atoms/Cookies/CookiesButton'
import CookiesWrapped from '../../molecules/Cookies/CookiesWrapped'
import styles from './Cookies.module.sass'
import { useSelector } from 'react-redux'
// import { cookieAccept, cookie_state } from '../../../../redux/reducer/reducers'
import {useCookieState} from '../../../../redux/selectors/cookies'
import Cookies from 'universal-cookie'
import anime from 'animejs';

const cookie = new Cookies()
const cookieContainer = React.createRef<HTMLDivElement>()

export default function CookieContainer(){
  const cookieState = useCookieState()
  const [cookiesHidden, setCookiesHidden] = useState(false)
  const [checked, setCheckedStatus] = useState(false)
  useEffect(() => {
    if(cookie.get('USER_ACCEPTED_COOKIES') === 'true'){
      setCookiesHidden(true)
    }
  })
  useEffect(() => {
    if(cookieState){
      const tl = anime.timeline({
        targets: cookieContainer.current,
      })
  
      tl.add({
        transformX: '200px',
        opacity: [1, 0]
      })
      cookie.set('USER_ACCEPTED_COOKIES', 'true')
    }

    setCheckedStatus(true)

    console.log(`L: ${cookiesHidden} T: ${typeof cookiesHidden} | R: ${cookie.get('USER_ACCEPTED_COOKIES')} T: ${typeof cookie.get('USER_ACCEPTED_COOKIES')}`)
  })

    return(
      <div>
        {checked && <div ref={cookieContainer} className={`${styles.cookiesContainer}`} style={cookiesHidden ? {display: 'none'} : {display: 'block'}}>
          <CookiesWrapped />
        </div>}
      </div>
    )
}
