import React, {ReactNode} from 'react'

interface Props {
    children?: string
}

export default function SubHeader({children}: Props) {
  return(
    <p style={{fontSize: '1.2rem'}}>{children}</p>
  )
}
