import React, {ReactNode} from 'react'
import Circle from '../../atoms/WelcomeBackground/Circle'

export default function CircleWrapped() {
  return(
    <Circle styles={{translate: '0%', gridColumn: 1, gridRow: 9}}/>
  )
}
