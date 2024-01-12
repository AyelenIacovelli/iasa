import React from 'react'
import "./nosotrosStyles.css"
import Helmet from "../../components/Helmet/Helmet"

const Nosotros = () => {
    return (
        <Helmet title="nosotros">
            <section className='nosotros__section'>
                <div className='nosotros__container'>
                    <div className='background'></div>
                    <div className='nosotros__container-data'>
                        <div className='historia'>
                            <h3>HISTORIA</h3>
                            <p>Iniciamos nuestras actividades realizando trabajos para terceros hace más de 24 años. Con el paso del tiempo fuimos ampliando la gama de actividades para convertirnos en una empresa que ofrece múltiples servicios directos a usuarios, incorporando maquinarias de última tecnología y capacitando constantemente al personal para estar acorde con las exigencias actuales, tanto en las normas de calidad como en el cuidado del medio ambiente.</p>
                        </div>
                        <div className='calidad'>
                            <h3>CALIDAD</h3>
                            <p>La misión de IASA es brindar productos de calidad, adaptables en forma flexible a los requerimientos del cliente.</p>
                        </div>
                        <div className='confianza'>
                            <h3>CONFIANZA</h3>
                            <p>Confiamos nuestro crecimiento y rentabilidad a largo plazo sobre las sólidas bases de satisfacción de nuestros clientes</p>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Nosotros