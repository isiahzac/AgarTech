import React from 'react'
import '../Pages/css/QuienSomos.css'
import  header_image  from '../Components/Assets/qsimage1.jpg'
import mid_image from '../Components/Assets/qsimage2.jpg'
import bot_image from '../Components/Assets/qsimage3.jpg'


export const QuienSomos = () => {
  return (
    <div className="quiensomos">
      <div className='header-container'>
        <div className="header-left">
            <h1 className='header-title'>Bienvenido a AgarTech!</h1>
            <p className='header-text'>Tal cómo la legendaria ciudad de Agartha, somos el epicentro de la innovación tecnológica y la sostenibilidad. Situada en el corazón de nuestro compromiso con el desarrollo tecnológico está la preservación del medio ambiente. Te invitamos a explorar un universo de posibilidades donde la tecnología de vanguardia se une con la preocupación por nuestro planeta.</p>
        </div>

        <div className="header-right">
            <img src={header_image} alt="robot" />
        </div>   
      </div>
      <div className='mid-container'>
          <div className="mid-left">
              <img src={mid_image} alt="robot" />
          </div>
          <div className="mid-right">
              <h2 className='mid-title'>Descubre nuestro marketplace</h2>
              <p className='mid-text'>Tenemos un verdadero hub de    empresas, donde encontrarás una amplia gama de productos de última generación, desde dispositivos robóticos hasta soluciones tecnológicas avanzadas. Pero nuestra visión va más allá.
              </p>
          </div>
      </div>
      <div className='bottom-container'>
        <div className='bottom-title'>
        <h2>Únete al Movimiento: Tecnología Asequible y Sostenible</h2>
        </div>
        <div className='bottom'>
            <div className="bottom-left">
              <p className='bottom-text'>En AgarTech, nos comprometemos con la economía circular, ofreciéndote también una selección cuidadosamente curada de productos de segunda mano. Cada dispositivo, rigurosamente revisado, te brinda la oportunidad de acceder a la tecnología de manera asequible mientras contribuyes a reducir nuestra huella ambiental.</p>
            </div>

            <div className="bottom-right">
                <img src={bot_image} alt="robot" />
            </div>

          </div>
      </div>

    </div>

  )
}
