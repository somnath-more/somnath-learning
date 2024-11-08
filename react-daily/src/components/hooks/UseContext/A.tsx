import React from 'react'
import B from './B'
import ContextProvider from './ContextProvider'

const A = () => {
  return (
    <ContextProvider>
        <p>This is A component</p>
        <B/>
    </ContextProvider>
  )
}

export default A