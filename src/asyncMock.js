const products = [
    {
        id: '1',
        name: 'Router Cisco',
        price: 4000,
        category: 'router',
        img: 'https://www.cisco.com/c/en/us/products/routers/catalyst-8300-series-edge-platforms/index/jcr:content/Grid/category_atl/layout-category-atl/anchor_info.img.jpg/1605807591289.jpg',
        stock: 2,
        description: 'Descripción del Router'
    },
    {
        id: '2',
        name: ' switch cisco',
        price: 8900,
        category: 'switch',
        img: 'https://www.cisco.com/c/dam/en/us/products/collateral/switches/catalyst-9400-series-switches/nb-06-cat9400-series-line-data-sheet-cte-en.docx/_jcr_content/renditions/nb-06-cat9400-series-line-data-sheet-cte-en_1.png',
        stock: 3,
        description: 'Descripción del Router'
    },
    {
        id: '3',
        name: 'antena canopy',
        price: 4000,
        category: 'radio',
        img: 'https://www.cisco.com/c/dam/en/us/products/collateral/switches/catalyst-9400-series-switches/nb-06-cat9400-series-line-data-sheet-cte-en.docx/_jcr_content/renditions/nb-06-cat9400-series-line-data-sheet-cte-en_1.png',
        stock: 4,
        description: 'Descripción del Router'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}