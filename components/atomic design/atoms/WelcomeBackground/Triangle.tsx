import React, {ReactNode} from 'react'
import Header from '../../atoms/WelcomeTitle/Header'
import SubHeader from '../../atoms/WelcomeTitle/Subheader'

export interface Props {
    fill?: string
    size?: Array<number>
    styles?: object
}

export default function Triangle({fill, size, styles}: Props) {
  return(
    <svg style={styles} width={size !== undefined ? size[0] : 0} height={size !== undefined ? size[0] : 0} viewBox="0 0 297 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M148.5 0L296.157 255.75H0.842667L148.5 0Z" fill={fill}/>
    </svg>

  )
}
