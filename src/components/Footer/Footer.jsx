import React from 'react'
import "./footerStyles.css"
import logo from "../../assets/images/logo-iasa.png"

const Footer = () => {
    return (
        <section className='footer__section'>
            <div className='footer__container'>
                <div className='logo__container'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='direccion' >
                    <h4>Dirección</h4>
                    <p>Coronel Mendez 1851 - Wilde - CP: 1875</p>
                </div>
                <div className='telefono'>
                    <h4>Teléfono</h4>
                    <p>4289-2095 / 116-595-5870</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>mecanizados_iasa@speedy.com</p>
                </div>
            </div>
        </section>
    )
}

export default Footer