import React, { useEffect, useState } from 'react'
import { products } from '../../data/Trabajos'
import "../Mecanizados/mecanizadosStyles.css"
import ProductsList from '../../components/UI/Trabajos/ProductsList'

const Transportadores = () => {

    const [transportadores, setTransportadores] = useState([])

    useEffect(() => {
        const filtroTransportadores = products.filter(item => item.category === "transportadores")
        setTransportadores(filtroTransportadores)
    }, [])

    return (
        <section className='mecanizados__section'>
            <div className='mecanizados__container'>
                <div className='mecanizados__container-hero'>
                    <div className='modal-mec'></div>
                    <h2>TRANSPORTADORES</h2>
                </div>
                <div className='mecanizados__container-info'>
                    <div className='reposicion'>
                        <div className='reposicion-info'>
                            <h3>MUESTRA DE TRABAJOS</h3>
                            <p>Transportadores a cinta, Transportadores a cadena, Transportadores a rodillos motorizados, Transportadores a tablillas de acero, Transportadores a banda modular, Transportadores con tapador de baldes. Automatización. Provisión de repuestos de todo tipo de transportadores: tambores motriz y tensor, rodillos, guías laterales, tensores, etc</p>
                        </div>
                        <div className='reposicion-galeria'>
                            <ProductsList data={transportadores} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transportadores