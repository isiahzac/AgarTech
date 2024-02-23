import React from 'react'
import './Empresas.css'
import empresa1 from './Components/Assets/empresa1.png'
import empresa2 from './Components/Assets/empresa2.png'
import empresa3 from './Components/Assets/empresa3.png'
import empresa4 from './Components/Assets/empresa4.png'
import empresa5 from './Components/Assets/empresa5.png'

export const Empresas = () => {
  return (
    <div className='empresas-container'>

        <div className='empresas-header'>
            <h1>Empresas</h1>
        </div>

        <div className='empresas-body'>
            <div className="empresas-item"><img src={empresa1} alt="empresa" /></div>
            <div className="empresas-item"><img src={empresa2} alt="empresa2" /></div>
            <div className="empresas-item"><img src={empresa3} alt="empresa3" /></div>
            <div className="empresas-item"><img src={empresa4} alt="empresa4" /></div>
            <div className="empresas-item"><img src={empresa5} alt="empresa5" /></div>
        </div>

    </div>
  )
}
