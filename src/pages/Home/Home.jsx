import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Helmet from "../../components/Helmet/Helmet"
import Button from '../../components/UI/Button/Button'
import "./homeStyles.css"
import { Clientes } from "../../data/Clientes"
import Products from '../Products/Products'
import Calidad from '../Calidad/Calidad'
import Contacto from '../Contacto/Contacto'
import Nosotros from '../Nosotros/Nosotros'

const Home = () => {

    const navigate = useNavigate()

    // SLIDER CLIENTES
    const listRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = curr === 0;
                return isFirstSlide ? Clientes.length - 1 : curr - 1;
            });
        } else {
            setCurrentIndex(curr => {
                const isLastSlide = curr === Clientes.length - 1;
                return isLastSlide ? 0 : curr + 1;
            });
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }


    return (
        <Helmet title="Inicio">
            {/* HERO */}
            <section className='hero__section'>
                <div className='hero__container'>
                    <div className='modal'></div>
                    <h1>IASA</h1>
                    <p className='hero__container-p'>Más de 24 años prestando servicios y productos metalúrgicos de primera calidad</p>
                    <Button onClick={() => {
                        navigate('/contacto')
                    }}>CONTACTO</Button>
                </div>
            </section>
            {/* PRODUCTOS Y SERVICIOS */}
            <Products />
            {/* CLIENTES */}
            <section className='clients__section'>
                <div className='clients__container'>
                    <h2>NUESTROS CLIENTES</h2>
                    <div className='container-general'>
                        <div className='slider__container'>
                            <div className='left-arrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                            <div className='right-arrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                            <div className='slider__container-imgs'>
                                <ul ref={listRef}>
                                    {
                                        Clientes.map((cliente) => {
                                            return <li key={cliente.id}>
                                                <img src={cliente.img} alt={`Cliente ${cliente.id}`} />
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='dots-container'>
                                {
                                    Clientes.map((_, index) => (
                                        <div key={index} className={`dot-container-item ${index === currentIndex ? "active" : ""}`} onClick={() => goToSlide(index)}>&#9865;</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='clients_text'>
                            <p>Nuestra experiencia de muchos años en el trabajo metalúrgico nos permite mostrar la gran cantidad empresas que confiaron en nosotros</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* INGENIERIA Y CONTROL */}
            <Calidad />
            {/* NOSOTROS */}
            <Nosotros />
            {/* CONTACTO */}
            <Contacto />

        </Helmet>
    )
}

export default Home