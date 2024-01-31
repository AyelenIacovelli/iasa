import React from 'react'
import Helmet from "../../components/Helmet/Helmet"
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'

const Products = () => {

    const navigate = useNavigate()

    return (
        <Helmet title="Productos">
            <section className='products__section'>
                <div className='products__container'>
                    <h2>PRODUCTOS Y SERVICIOS</h2>
                    <div className='products__container-cards'>
                        <div className='card__mecanizados'>
                            <div className='modal darkmodal'></div>
                            <h3>MECANIZADOS</h3>
                            <div className='p_container'>
                                <p>Piezas de reposición</p>
                                <p>Estructuras</p>
                                <p>Bases de adaptacion</p>
                                <p>Mecanizado in situ</p>
                            </div>
                            <Button onClick={() => navigate('/mecanizados')}>VER TRABAJOS</Button>
                        </div>
                        <div className='card__transmisiones'>
                            <div className='modal darkmodal'></div>
                            <h3>TRANSMISIONES</h3>
                            <div className='p_container'>
                                <p>Reductores y multiplicadores de velocidad</p>
                                <p>Variadores de velocidad</p>
                                <p>Engranajes</p>
                                <p>Acoplamientos</p>
                            </div>
                            <Button onClick={() => {
                                navigate('/products')
                            }}>VER TRABAJOS</Button>
                        </div>
                        <div className='card__transportadores'>
                            <div className='modal darkmodal'></div>
                            <h3>TRANSPORTADORES</h3>
                            <div className='p_container'>
                                <p>Transportadores a cinta</p>
                                <p>Transportadores a rodillos motorizados</p>
                                <p>Transportadores a tablillas</p>
                                <p>Transportadores a banda modular</p>
                                <p>Transportadores combinados</p>
                                <p>Tapadores de baldes automáticos</p>
                            </div>
                            <Button onClick={() => {
                                navigate('/products')
                            }}>VER TRABAJOS</Button>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Products