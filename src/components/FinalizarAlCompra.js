import React from 'react'
import { NavLink } from 'react-router-dom'

const FinalizarAlCompra = () => {
    return (
        <div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Comprar</label>
                <input type="text" class="form-control" id="formGroupExampleInput"
                    placeholder="Comprar" />
            </div>
            <div class="mb-3">
                 <br />
                <br />
                <div class="btn-group">
                    <button type="button" class="btn btn-danger">
                      <NavLink to="/Exito">
                          Comprar
                      </NavLink>
                    </button>
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="caret"></span>
                        <span class="sr-only">
                         </span>
                    </button>
                    <ul class="dropdown-menu">
                        <li>   
                        <NavLink to="/Exito">
                          Comprar
                      </NavLink>
                      </li>
                        <li>   
                        <NavLink to="/">
                          Inicio
                      </NavLink>
                      </li>
                        <li>   
                        <NavLink to="/Consejos">
                          Consejos
                      </NavLink>
                      </li>
                        <li role="separator" class="divider"></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FinalizarAlCompra
