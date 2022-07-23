import React, {useState, useEffect} from 'react'
//import Button from '../Button/Button' //No lo uso por ahora
import './Navbar.css' //Importando el archivo de estilos.

//Probando si funcionan los botones:
/*const text = 'Hice Clicks';
const handleClick = () => {
    console.log(text)
}*/

const Navbar = () => { //Creamos una funcion que retorne la parte visual del Navbar, componentes basados en funciones BUENA PRÁCTICA!!!

    return (

        <nav>
            <h1>Mi Primer ECommerce</h1>
            <ul className="list">
                <li className="items">ANTENAS</li>
                <li className="items">ROUTERS</li>
                <li className="items">SWITCHES</li>
            </ul>
    </nav>
    )
}

export default Navbar //Definimos que es un bloque que se va a utilizar afuera, es decir lo vamos a exprtar














