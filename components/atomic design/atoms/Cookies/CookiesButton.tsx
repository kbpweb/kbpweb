import React, {ReactNode} from 'react'
import Circle from '../../atoms/WelcomeBackground/Circle'
import {description} from '../../../../content/Cookies/cookies_desc'
import styles from './CookiesButton.module.sass'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { cookie_state } from '../../../../redux/reducer/reducers'


const cookie = new Cookies()

export default function CookiesButton() {
  const dispatch = useDispatch()
  const validateCookies = () => {
    dispatch(cookie_state(true))
  }
  return(
    <>
        <button className={`${styles.button}`} onClick={() => validateCookies()}><span>Akceptuję</span></button>
    </>
  )
}
