//Creamos un contador para agregar o quitar productos del ecommerce
import { useState } from "react"; 

//useState = Este hook, nos permite guardar un pedacito de memoria para guardar un dato y que al ejecutarlo, react pueda ejecutar nuevamente todo el calculo y actualizar el DOM.

//useEffect = Este hook sirve para controlar efectos secundarios y las etapas del ciclo de vida.
//Este contador lo vamos a usar mas adelante con los productos del ecommerce
const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock ) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter