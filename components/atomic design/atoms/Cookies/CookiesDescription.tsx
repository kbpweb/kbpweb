import React, {ReactNode} from 'react'
import Circle from '../../atoms/WelcomeBackground/Circle'
import {description} from '../../../../content/Cookies/cookies_desc'


export default function CookiesDescription() {
  return(
    <p style={{color: 'white', padding: '0 40px', margin: 0, fontFamily: 'EuclidLight'}}>{description}</p>
  )
}
