'use client'
import { ReactLenis } from 'lenis/react'

const LenisScroll = ({children}) => {
  return (
    <ReactLenis root options={{
        lerp:0.04
    }}>
      {children}
    </ReactLenis>
  )
}

export default LenisScroll;