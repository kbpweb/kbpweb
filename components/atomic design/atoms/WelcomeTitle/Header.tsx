import React, {ReactNode} from 'react'

interface Props {
    children?: string
}

export default function Header({children}: Props) {
  return(
    <h1 style={{fontFamily: 'EuclidBold', fontSize: '6rem'}}>{children}</h1>
  )
}
