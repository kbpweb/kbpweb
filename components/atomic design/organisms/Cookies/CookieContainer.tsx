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

const cookie = new Cookies()

export default function CookieContainer(){
  const cookieState = useCookieState()
  console.log('aa ' + cookie.get('USER_AGREED_COOKIES'))
  useEffect(() => {
    if(cookieState){
      setTimeout(() => {
        cookie.set('USER_AGREED_COOKIES', true)
      }, 200)
    }
  })

  if(cookie.get('USER_AGREED_COOKIES') !== 'true' || true){
    return(
      <div className={`${styles.cookiesContainer}`} style={cookieState ? {opacity: 0, transition: '.2s all ease-in-out'} : {}}>
          <CookiesWrapped />
      </div>
    )
  }
}
