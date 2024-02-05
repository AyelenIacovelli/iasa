import React from 'react'
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io"
import Helmet from '../../components/Helmet/Helmet'

const Contacto = () => {

    return (
        <Helmet title="contacto">
            <section className='contacto__section'>
                <div className='contacto__container'>
                    <div className='contacto__container-title'>
                        <h2>CONTACTO</h2>
                        <h3>¡Quedamos a disposición para responder cualquier consulta que tengas!</h3>
                    </div>
                    <div className='contacto__container-info'>
                        <div className='contacto__container-info-datos'>
                            <p><FaPhone /> (+54 11) 4289-2095</p>
                            <p><IoLogoWhatsapp /> (+54 9 11) 6595-5870</p>
                            <p><IoIosMail /> mecanizados_iasa@speedy.com</p>
                            <p><FaMapMarkerAlt /> Coronel Mendez 1851 - WILDE - Buenos Aires</p>
                        </div>
                    </div>
                    <div className='contacto__container-info-mapa'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.5957239512218!2d-58.34686332487854!3d-34.715375463402594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33297437bd531%3A0x80d018975d65d2de!2sCoronel%20Juan%20N.%20M%C3%A9ndez%201851%2C%20B1874EDK%20Wilde%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1704804119616!5m2!1ses-419!2sar" title='maps' />
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Contacto