import React from 'react'
import "./nosotrosStyles.css"
import Helmet from "../../components/Helmet/Helmet"
// import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const Nosotros = () => {

    // const [refHistoria, inViewHistoria] = useInView({
    //     triggerOnce: true,
    // });

    // const [refCalidad, inViewCalidad] = useInView({
    //     triggerOnce: true,
    // });

    // const [refConfianza, inViewConfianza] = useInView({
    //     triggerOnce: true,
    // });

    // const h3Variants = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1, transition: { duration: 3 } },
    // };

    return (
        <Helmet title="nosotros">
            <section className='nosotros__section'>
                <div className='nosotros__container'>
                    <div className='background'></div>
                    <div className='nosotros__container-data'>
                        <div className='historia' /*ref={refHistoria}*/ >
                            <motion.h3 /*initial='hidden'
                                animate={inViewHistoria ? 'visible' : 'hidden'}
                                variants={h3Variants}*/>HISTORIA</motion.h3>
                            <p>Iniciamos nuestras actividades realizando trabajos para terceros hace más de 24 años. Con el paso del tiempo fuimos ampliando la gama de actividades para convertirnos en una empresa que ofrece múltiples servicios directos a usuarios, incorporando maquinarias de última tecnología y capacitando constantemente al personal para estar acorde con las exigencias actuales, tanto en las normas de calidad como en el cuidado del medio ambiente.</p>
                        </div>
                        <div className='calidad' /*ref={refCalidad}*/>
                            <motion.h3 /*initial='hidden'
                                animate={inViewCalidad ? 'visible' : 'hidden'}
                                variants={h3Variants}*/>CALIDAD</motion.h3>
                            <p>La misión de IASA es brindar productos de calidad, adaptables en forma flexible a los requerimientos del cliente.</p>
                        </div>
                        <div className='confianza' /*ref={refConfianza}*/>
                            <motion.h3 /*initial='hidden'
                                animate={inViewConfianza ? 'visible' : 'hidden'}
                                variants={h3Variants}*/>CONFIANZA</motion.h3>
                            <p>Confiamos nuestro crecimiento y rentabilidad a largo plazo sobre las sólidas bases de satisfacción de nuestros clientes</p>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Nosotros