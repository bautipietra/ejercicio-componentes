import React from 'react'
import { useParams } from 'react-router'

export const Product = () => {
  const { id } = useParams()

  const products = [
    {
      nombre: 'TV',
      precio: 500,
      id: 1
    },
    {
      nombre: 'Celular',
      precio: 600,
      id: 2
    }
  ]

  const product = products.find((p) => p.id == id)
  console.log(product)

  if (product) {
    return (
      <div>
        <h1>{product.nombre}</h1>
        <h2>${product.precio}</h2>
      </div>
    )
  } else {
    return (
      <div>
        <h1>No existe</h1>
      </div>
    )
  }
}
