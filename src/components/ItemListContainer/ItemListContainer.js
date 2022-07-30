import './ItemListContainer.css';
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock.js' //Generamos el llamado al simulador de API
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    //console.log(products)
    //Llamamos una vez al simulador de API
    useEffect (()=> {
        getProducts().then(products => {
            setProducts(products)
        })
    },[])
    //Transformo los elementos de un array en otro tipo de elemento que me sirva en este caso <li> y cada uno debe tener uns key única porque a react le gusta controlar todo.
    //const productsComp = products.map(prod => <li key={prod.id}>{prod.name}</li>)
    //console.log(productsComp)
    return (
        <>
            <h2>{greeting}</h2> {/*Saludo que pasa por un props*/}
            {/*Listanto los productos*/}
            {/*<ul>*/}
                {/*productsComp, si es que uso la fs*/}
                {/*{products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul>*/}
            <ItemList products={products}/>
        </>
        

    )

}

export default ItemListContainer