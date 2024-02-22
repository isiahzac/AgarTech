import React from 'react'
import './DescripcionBox.css'

export const DescripcionBox = () => {
    return (
        <div className='descripcionbox'>
            <div className='descripcionbox-navigator'>
                <div className='descripcionbox-nav-box'>Descripcion</div>
                <div className='descripcionbox-nav-box fade'>Reviews (122)</div>

            </div>
            <div className='descripcion-descripcion'>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>


        </div>
    )
}
