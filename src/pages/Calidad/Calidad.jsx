import React from 'react'
import control from "../../assets/images/control.jpg"
import ingenieria from "../../assets/images/ingenieria.jpg"
import Helmet from '../../components/Helmet/Helmet'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const Calidad = () => {

    const [refIngenieria, inViewIngenieria] = useInView({
        triggerOnce: true,
    });

    const [refControl, inViewControl] = useInView({
        triggerOnce: true,
    });

    const h2Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
    };

    const h2Variants2 = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
    };


    return (
        <Helmet title="calidad">
            <section className='ingenieria__section'>
                <div className='ingenieria__control'>
                    <div className='ingenieria__container' ref={refIngenieria}>
                        <div className='ingenieria__container-img'>
                            <img src={ingenieria} alt="ingenieria" />
                        </div>
                        <div className='ingenieria__container-data'>
                            <motion.h2 initial='hidden'
                                animate={inViewIngenieria ? 'visible' : 'hidden'}
                                variants={h2Variants}>INGENIERIA</motion.h2>
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
                        <div className='control__container-data' ref={refControl} >
                            <motion.h2 initial='hidden'
                                animate={inViewControl ? 'visible' : 'hidden'}
                                variants={h2Variants2}>CONTROL</motion.h2>
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