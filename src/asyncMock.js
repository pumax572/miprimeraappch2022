// Este es un bloque de código que va a simular lo que yo quiera, por ejemplo este es como si fuese una API
// Estos productos van a ser solicitados desde el ItemListContainer

const products = [
    {
        id: '1',
        name: 'Router Cisco',
        price: 400,
        category: 'router',
        img: 'https://www.cisco.com/c/en/us/products/routers/catalyst-8300-series-edge-platforms/index/jcr:content/Grid/category_atl/layout-category-atl/anchor_info.img.jpg/1605807591289.jpg',
        stock: 2,
        description: 'Descripción del Router'
    },
    {
        id: '2',
        name: ' switch cisco',
        price: 400,
        category: 'switch',
        img: 'https://www.cisco.com/c/dam/en/us/products/collateral/switches/catalyst-9400-series-switches/nb-06-cat9400-series-line-data-sheet-cte-en.docx/_jcr_content/renditions/nb-06-cat9400-series-line-data-sheet-cte-en_1.png',
        stock: 3,
        description: 'Descripción del Router'
    },
    {
        id: '3',
        name: 'antena canopy',
        price: 400,
        category: 'radio',
        img: 'images/canopy.webp',
        stock: 4,
        description: 'Descripción del Router'
    }
]

// Generamos un código asíncrono que genera un llamado a una API que retorne una promesa
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products) //Quiero que resuelva el array de productos
        }, 2000) //Simulamos el retardo de cuanto tarda la peticion a la API
        
    })
}