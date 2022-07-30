//Retornamos la tarjeta de producto completa, falta agregar estilo!
const Item = ({ product }) => {
    return (
        <li>
            <h4> {product.name} </h4>
             <img src={product.img} alt={product.name}/>
             <button>VER DETALLE</button>          
        </li>
        
    )
}

export default Item