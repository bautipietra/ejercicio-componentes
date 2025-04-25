import React from 'react'
import { Titulo } from '../components/Titulo'
import { Card } from '../components/Card'

export const Contacto = () => {
  return (
    <div>
      <h1>Estamos en la página de contacto</h1>
      <Card
        titulo='Card de la sección de contacto'
        enlace='ejemplo de enlace'></Card>
      <Titulo
        texto={'Soy el primer texto en la sección de contacto'}
        segundoTexto={'yo soy el segundo'}></Titulo>
      <button>Enviar formulario</button>
    </div>
  )
}
