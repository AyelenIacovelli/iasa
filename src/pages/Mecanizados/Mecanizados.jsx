import React, { useEffect, useState } from 'react'
import "./mecanizadosStyles.css"
import ProductsList from '../../components/UI/Trabajos/ProductsList'
import { products } from '../../data/Trabajos'

const Mecanizados = () => {

    const [reposicion, setReposicion] = useState([])

    useEffect(() => {
        const filtroReposicion = products.filter(item => item.category === "reposicion")
        setReposicion(filtroReposicion)
    }, [])


    const [estructura, setEstructura] = useState([])

    useEffect(() => {
        const filtroEstructura = products.filter(item => item.category === "estructura")
        setEstructura(filtroEstructura)
    }, [])


    const [insitu, setInsitu] = useState([])

    useEffect(() => {
        const filtroInsitu = products.filter(item => item.category === "insitu")
        setInsitu(filtroInsitu)
    }, [])


    const [caldederia, setCaldederia] = useState([])

    useEffect(() => {
        const filtroCaldederia = products.filter(item => item.category === "caldederia")
        setCaldederia(filtroCaldederia)
    }, [])

    return (
        <section className='mecanizados__section'>
            <div className='mecanizados__container'>
                <div className='mecanizados__container-hero'>
                    <div className='modal-mec'></div>
                    <h2>MECANIZADOS Y CALDEDERIA</h2>
                </div>
                <div className='mecanizados__container-info'>
                    <div className='reposicion'>
                        <div className='reposicion-info'>
                            <h3>PIEZAS DE REPOSICION</h3>
                            <p>Fabricamos piezas de reposición o de área de mantenimiento de acuerdo a: Muestras, Croquis o planos, Acero al carbono, Acero inoxidable, Aleaciones especiales, Bronce, Aluminio, Plásticos industriales, etc.</p>
                        </div>
                        <div className='reposicion-galeria'>
                            <ProductsList data={reposicion} />
                        </div>
                    </div>
                    <div className='estructuras'>
                        <div className='estructuras-info'>
                            <h3>ESTRUCTURAS Y BASES DE ADAPTACIÓN</h3>
                            <p>Fabricamos y/o mecanizamos: Cajas de engranajes, Estructuras y repuestos para maquinarias viales, Bases de adaptación para equipos industriales, etc.</p>
                        </div>
                        <div className='estructuras-galeria'>
                            <ProductsList data={estructura} />
                        </div>
                    </div>
                    <div className='insitu'>
                        <div className='insitu-info'>
                            <h3>MECANIZADO IN SITU</h3>
                            <p>Contamos con equipos para realizar mecanizado IN SITU de dificultoso traslado</p>
                        </div>
                        <div className='insitu-galeria'>
                            <ProductsList data={insitu} />
                        </div>
                    </div>
                    <div className='caldederia'>
                        <div className='caldederia-info'>
                            <h3>CALDEDERIA</h3>
                            <p>Fabricamos todo tipo de estructuras soldadas eléctricamente, con posterior tratamiento térmico para eliminar tensiones, arenado o granallado, y pintado con anticorrosivo.</p>
                        </div>
                        <div className='caldederia-galeria'>
                            <ProductsList data={caldederia} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mecanizados