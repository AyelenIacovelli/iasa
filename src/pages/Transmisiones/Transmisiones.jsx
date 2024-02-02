import React, { useEffect, useState } from 'react'
import "../Mecanizados/mecanizadosStyles.css"
import ProductsList from '../../components/UI/Trabajos/ProductsList'
import { products } from '../../data/Trabajos'

const Transmisiones = () => {

    const [reductores, setReductores] = useState([])

    useEffect(() => {
        const filtroReductores = products.filter(item => item.category === "reductores")
        setReductores(filtroReductores)
    }, [])

    const [engranajes, setEngranajes] = useState([])

    useEffect(() => {
        const filtroEngranajes = products.filter(item => item.category === "engranajes")
        setEngranajes(filtroEngranajes)
    }, [])

    const [variadores, setVariadores] = useState([])

    useEffect(() => {
        const filtroVariadores = products.filter(item => item.category === "variadores")
        setVariadores(filtroVariadores)
    }, [])

    return (
        <section className='mecanizados__section'>
            <div className='mecanizados__container'>
                <div className='mecanizados__container-hero'>
                    <div className='modal-mec'></div>
                    <h2>TRANSMISIONES</h2>
                </div>
                <div className='mecanizados__container-info'>
                    <div className='reposicion'>
                        <div className='reposicion-info'>
                            <h3>REDUCTORES DE VELOCIDAD</h3>
                            <p>Fabricamos y reparamos reductores de velocidad de media y elevada potencia, de ejes paralelos, ortogonales, coaxiales, de planetarios y de sinfín y corona para la industria.
                                Los equipos nuevos son diseñados de acuerdo a las necesidades de nuestros clientes, pudiéndolos fabricar para que sean cien por ciento intercambiables con otros equipos existentes en la planta.
                                Debemos puntualizar nuestra experiencia en la reparación de reductores de velocidad de primeras marcas tales como FLENDERM CITROEN MEDDIAN, HANSENM THYSSEN, ROSSI, FALK, BAUER, EICKHOFF, PHILADELPHIA, COMELOR, ENGRAVEL, SEISA, SEW, entre otros.
                                La repotenciación y/o modernización de equipos forman parte de nuestra tarea habitual que desarrollamos de acuerdo a la necesidad de los clientes en vuestra planta o en nuestra empresa.</p>
                        </div>
                        <div className='reposicion-galeria'>
                            <ProductsList data={reductores} />
                        </div>
                    </div>
                    <div className='estructuras'>
                        <div className='estructuras-info'>
                            <h3>ENGRANAJES</h3>
                            <p>Nuestros servicios incluyen el relevamiento dimensional, cálculo y fabricación de engranajes de dientes rectos, helicoidales, bihelicoidales, cónicos espiroidales, hipoidales, sinfín y corona, estriados interiores y exteriores, de alta precisión, tratados térmicamente y con flancos rectificados.</p>
                        </div>
                        <div className='estructuras-galeria'>
                            <ProductsList data={engranajes} />
                        </div>
                    </div>
                    <div className='insitu'>
                        <div className='insitu-info'>
                            <h3>VARIADORES MECANICOS DE VELOCIDAD</h3>
                            <p>Nuestros servicios incluyen: Cambio de platos, cadenas, rodamientos y retenes; Contrucción de ejes dañados; Puesta a punto. Debemos remarcar nuestra experiencia en la reparación de variadores marca P.I.V.</p>
                        </div>
                        <div className='insitu-galeria'>
                            <ProductsList data={variadores} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transmisiones