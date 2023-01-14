import React, {ReactNode} from 'react'
import Dots from '../../atoms/WelcomeBackground/Dots'
import styles from '../../organisms/WelcomeBackground/BackgroundView.module.sass'

export default function DotsGroup() {
  return(
      <>
        <Dots styles={{gridColumn: 15, gridRow: 4}}/>
        <Dots styles={{gridColumn: 16, gridRow: 5}}/>
      </>
  )
}
