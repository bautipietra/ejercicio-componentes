import React from 'react'

export const Titulo = ({ children, texto, segundoTexto }) => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <ol>
        <li>{texto}</li>
        <li>{segundoTexto}</li>
      </ol>
      {children}
    </div>
  )
}
