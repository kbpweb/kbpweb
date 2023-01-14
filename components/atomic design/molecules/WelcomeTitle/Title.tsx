import React, {ReactNode} from 'react'
import Header from '../../atoms/WelcomeTitle/Header'
import SubHeader from '../../atoms/WelcomeTitle/Subheader'

interface Props {
    header?: string
    subheader?: string
}

export default function Title({header, subheader}: Props) {
  return(
    <div style={{width: '50%', minWidth: '900px', maxWidth: '1000px'}}>
        <Header children={header}/>
        <SubHeader children={subheader}/>
    </div>
  )
}
