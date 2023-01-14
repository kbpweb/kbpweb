import React, {ReactNode} from 'react'
import Header from '../../atoms/WelcomeTitle/Header'
import SubHeader from '../../atoms/WelcomeTitle/Subheader'
import Triangle from '../../atoms/WelcomeBackground/Triangle'

export default function Triangles() {
  return(
    <div style={{position: 'relative'}}>
        <Triangle size={[297, 320]} fill='#F4F4F4' styles={{zIndex: '200', position: 'absolute', bottom: 0}}/>
        <Triangle size={[371.25, 320]} fill='#E9E9E9' styles={{translate: '25%', zIndex: '20', position: 'absolute', bottom: 0}}/>
    </div>
  )
}
