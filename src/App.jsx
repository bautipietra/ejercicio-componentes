import { Card } from './components/Card'
import { Titulo } from './components/Titulo'
import imgUno from './assets/01.webp'
import imgDos from './assets/02.webp'
import imgTres from './assets/03.webp'
import imgCuatro from './assets/04.webp'
import imgCinco from './assets/05.webp'

function App() {
  return (
    <div>
      <h1>Inicio</h1>
      <Card titulo='Mejora tu juego' enlace='Compra videojuegos'>
        <img src={imgUno} alt='' />
      </Card>
      <Card
        titulo='Compra los esenciales para tu hogar'
        enlace='Descubre más en hogar'>
        <div
          style={{
            display: 'grid',
            gap: 10,
            gridTemplateColumns: '1fr 1fr'
          }}>
          <div>
            <img src={imgDos} alt='' srcset='' />
            <p>Limpieza</p>
          </div>
          <div>
            <img src={imgTres} alt='' srcset='' />
            <p>Almacenamiento</p>
          </div>
          <div>
            <img src={imgCuatro} alt='' srcset='' />
            <p>Decoracion</p>
          </div>
          <div>
            <img src={imgCinco} alt='' srcset='' />
            <p>Ropa</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default App
