import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Mensajes from './components/Mensajes';

import Redes from './components/Redes';
import Carousel from './components/Carousel';
import Logo from './components/Logo';
import Buscar from './components/Buscar';
import Lenguajes from './components/Lenguajes';
import FinalizarAlCompra from './components/FinalizarAlCompra';
import Imagenes from './components/Imagenes';
import Exito from './components/Exito';
import Consejos from './components/Consejos'
class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Redes />
                <Logo />


                <Switch>
                    <Route path="/Ronald" component={Mensajes} />
                    
                    <Route path="/HOLAmundo" component={Buscar} />
                    <Route path="/Lenguajes" component={Lenguajes} />
                    <Route path="/formulario" component={FinalizarAlCompra} />
                    <Route path="/Imagenes" component={Imagenes} />
                    <Route path="/Exito" component={Exito} />
                    <Route path="/Consejos" 
                    component={Consejos} />
                <Carousel />
             
              
                
                </Switch>
                
            </BrowserRouter>
           
        );
    }
}
export default Router;