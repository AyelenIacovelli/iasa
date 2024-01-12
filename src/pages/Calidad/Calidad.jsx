import React from 'react'
import control from "../../assets/images/control.jpg"
import ingenieria from "../../assets/images/ingenieria.jpg"
import Helmet from '../../components/Helmet/Helmet'

const Calidad = () => {


    return (
        <Helmet title="calidad">
            <section className='ingenieria__section'>
                <div className='ingenieria__control'>
                    <div className='ingenieria__container'>
                        <div className='ingenieria__container-img'>
                            <img src={ingenieria} alt="ingenieria" />
                        </div>
                        <div className='ingenieria__container-data'>
                            <h2>INGENIERIA</h2>
                            <ul>
                                <li>Cálculo y proyecto de transmisiones mecánicas.</li>
                                <li>Repotenciación y/o modernización de equipos.</li>
                                <li>Ingeniería de diseño.</li>
                                <li>Producto con planos de detalle.</li>
                                <li>Asesoriamiento de instalaciones mecánicas.</li>
                                <li>Relevamiento dimensional en planta.</li>
                                <li>Informes metodológicos.</li>
                                <li>Confección de protocolos de control.</li>
                                <li>Análisis químico.</li>
                                <li>Ensayos no destructivos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='control__container'>
                        <div className='control__container-data'>
                            <h2>CONTROL</h2>
                            <ul>
                                <li>Los repuestos fabricados están sometidos a un proceso de control de calidad predeterminado durante su proceso según normas ISO, DIN, ASTM, AGMA u otras afines.</li>
                                <li>Ofrecemos supervisión, seguimiento y control, tanto de los trabajos en curso como los finalizados.</li>
                                <li>Las materias primas se adquieren con certificado de calidad y, en piezas críticas, son sometidad a análisis químicos y ensayos no destructivos con entrega de certificados de empresas acreditadas.</li>
                            </ul>
                        </div>
                        <div className='control__container-img'>
                            <img src={control} alt="control" />
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Calidad