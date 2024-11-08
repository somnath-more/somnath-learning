import React from 'react'
import C from './C'

const B = () => {
  return (
    <div>
        <p>Component B</p>
        <p>This is a child component of Component A</p>
        <C/>
    </div>
  )
}

export default B