import React, {ReactNode} from 'react'
import Circle from '../../atoms/WelcomeBackground/Circle'
import {description} from '../../../../content/Cookies/cookies_desc'
import styles from './CookiesButton.module.sass'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

export default function CookiesButton() {
    let isCookieSet = cookie.get('USER_AGREED_COOKIES')
    const handleValidateCookies = () => {
      cookie.set('USER_AGREED_COOKIES', 'TRUE')
  }
  return(
    <>
        <p style={{color: 'white'}}>zaakceptowano? {isCookieSet}</p>
        <button className={`${styles.button}`} onClick={() => handleValidateCookies()}><span>Akceptuję</span></button>
    </>
  )
}
