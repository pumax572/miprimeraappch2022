import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail' //Encargado de mostrar el detalle del producto

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    //Hago el llamado a mi API con useEffect
    useEffect(() => {
        getProductById('1')
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h4>Detalle de mi producto</h4>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer