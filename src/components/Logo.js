import React from 'react'
import { NavLink } from 'react-router-dom'
const Logo = () => {
    return (

        <div className="container">

            <div class="barra">
                <ul class="navegacion">
                    <li class="enlaces" id="perfil">
                        <a href="#perfil" class="padre">
                            <i class="far fa-user"></i> Aviso
                           </a>
                        <div class="submenu">
                            <NavLink to="/">Inicio</NavLink>
                            <NavLink to="/Ronald">Mensajes De Creador</NavLink>
                            <NavLink to="/HOLAmundo">Buscador De Jabones </NavLink>
                        </div>
                    </li>
                    <li class="enlaces" id="mensajes">
                        <a href="#mensajes" class="padre">
                            <i class="far fa-envelope"></i>Contactanos
                         </a>
                        <div class="submenu">
                            <NavLink to="/Lenguajes">Quieres Aprender Como Crear Pagina Web Entra Aqui</NavLink>
                        </div>
                    </li>
                    <li class="enlaces" id="grupos">
                        <a href="#grupos" class="padre">
                            <i class="fas fa-user"></i>Ver Los Imagenes
                        </a>
                        <div class="submenu">
                            <NavLink to="/Imagenes">Imagenes</NavLink>
                            
                        </div>
                    </li>
                   
                </ul>
            </div>
            <br />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />



        </div>
    )
}

export default Logo
