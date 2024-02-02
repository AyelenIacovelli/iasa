import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Products from "../pages/Products/Products"
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Calidad from '../pages/Calidad/Calidad';
import Contacto from '../pages/Contacto/Contacto';
import Nosotros from '../pages/Nosotros/Nosotros';
import Mecanizados from '../pages/Mecanizados/Mecanizados';
import Transmisiones from '../pages/Transmisiones/Transmisiones';
import Transportadores from "../pages/Transportadores/Transportadores"

function Routes() {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/calidad' element={<Calidad />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/mecanizados' element={<Mecanizados />} />
            <Route path='/transmisiones' element={<Transmisiones />} />
            <Route path='/transportadores' element={<Transportadores />} />
            <Route path='*' element={<PageNotFound />} />
        </ReactDomRoutes>
    );
}

export default Routes;