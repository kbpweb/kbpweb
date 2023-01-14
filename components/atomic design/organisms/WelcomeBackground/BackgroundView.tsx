import React, {ReactNode} from 'react'
import Header from '../../atoms/WelcomeTitle/Header'
import SubHeader from '../../atoms/WelcomeTitle/Subheader'
import Triangle from '../../atoms/WelcomeBackground/Triangle'
import Triangles from '../../molecules/WelcomeBackground/Triangles'
import styles from './BackgroundView.module.sass'
import DotsGroup from '../../molecules/WelcomeBackground/DotsGroup'
import CircleWrapped from '../../molecules/WelcomeBackground/CircleWrapped'

export default function BackgroundView() {
  return(
    <div className={`${styles.welcomeBackground}`}>
      <div className={`${styles.triangles}`}>
        <Triangles />
      </div>
      <DotsGroup />
      <CircleWrapped />
    </div>
  )
}
