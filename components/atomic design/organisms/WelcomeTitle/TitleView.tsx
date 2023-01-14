import React, {ReactNode} from 'react'
import Title from '../../molecules/WelcomeTitle/Title'
import styles from '../../../../styles/global_padding.module.sass'

interface Props {
    header?: string
    subheader?: string
}

export default function TitleView({header, subheader}: Props) {
  return(
    <div className={`${styles.padding}`}>
      <Title header={header} subheader={subheader}/>
    </div>
  )
}
