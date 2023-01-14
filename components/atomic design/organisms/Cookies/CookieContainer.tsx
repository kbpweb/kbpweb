import React, {ReactNode} from 'react'
import Circle from '../../atoms/WelcomeBackground/Circle'
import {description} from '../../../../content/Cookies/cookies_desc'
import CookiesTitle from '../../atoms/Cookies/CookiesTitle'
import CookiesDescription from '../../atoms/Cookies/CookiesDescription'
import CookiesButton from '../../atoms/Cookies/CookiesButton'
import CookiesWrapped from '../../molecules/Cookies/CookiesWrapped'
import styles from './Cookies.module.sass'

export default function CookieContainer(){
  return(
    <div className={`${styles.cookiesContainer}`}>
        <CookiesWrapped />
    </div>
  )
}
