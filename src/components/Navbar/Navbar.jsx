import React, { useEffect, useRef } from 'react'
import logo from "../../assets/images/logo-iasa.png"
import "./navbarStyles.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {

    const menuRef = useRef(null)
    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

    const headerRef = useRef(null)

    const stickyHeaderFunc = () => {
        if (window.scrollY > 300) {
            headerRef.current.classList.add("sticky__header");
        } else {
            headerRef.current.classList.remove("sticky__header");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", stickyHeaderFunc);

        return () => {
            window.removeEventListener("scroll", stickyHeaderFunc);
        };
    }, []);

    const navigateToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header ref={headerRef}>
            <nav>
                {/* LOGO */}
                <div className='logo-container'>
                    <Link to="/" onClick={navigateToTop}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                {/* LINKS */}
                <div className="navigation" ref={menuRef} onClick={menuToggle}>
                    <div className="links-container">
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/" onClick={navigateToTop}>
                                INICIO
                            </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/products" onClick={navigateToTop}>
                                PRODUCTOS|SERVICIOS
                            </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/calidad" onClick={navigateToTop}>
                                INGENIERIA|CONTROL
                            </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/nosotros" onClick={navigateToTop}>
                                NOSOTROS
                            </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to="/contacto" onClick={navigateToTop}>
                                CONTACTO
                            </Link>
                        </motion.div>
                    </div>
                </div>
                {/* MENU HAMBURGUESA */}
                <div className='mobile-menu'>
                    <span onClick={menuToggle}>
                        <FaBars className="menu-hamburguesa" />
                    </span>
                </div>
            </nav>

        </header>
    )
}

export default Navbar