import Nav from '@/components/Nav'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Nav/>
      {children}
    </div>
  )
}

export default layout