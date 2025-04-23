import React from 'react'

export const Card = ({ titulo, enlace, children }) => {
  return (
    <div
      style={{
        backgroundColor: '#494949',
        display: 'grid',
        margin: 20
      }}>
      
      <h1 style={{ color: 'white' }}>{titulo}</h1>
      {children}

      <a href='' style={{ color: 'aqua' }}>
        {enlace}
      </a>
      
    </div>
  )
}
