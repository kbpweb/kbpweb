import React, {ReactNode} from 'react'
import Circle from '../../atoms/WelcomeBackground/Circle'
import {description} from '../../../../content/Cookies/cookies_desc'
import CookiesTitle from '../../atoms/Cookies/CookiesTitle'
import CookiesDescription from '../../atoms/Cookies/CookiesDescription'
import CookiesButton from '../../atoms/Cookies/CookiesButton'


export default function CookiesWrapped() {
  return(
    <div style={{background: '#000', width: '250px', height: '400px', display: 'grid', placeItems: 'center'}}>
        <CookiesTitle />
        <CookiesDescription />
        <CookiesButton />
    </div>
  )
}
