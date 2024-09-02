import React from 'react'
import ProductItem from './ProductItem'
import productData from '../productData.js'


const Products = ({cart,setCart}) => {

    

    //    console.log(productData)
    return (
        <div className='grid grid-cols-3 gap-10 mb-8'>
            {productData.map((product) => (
                <ProductItem key={product.id} product={product} cart={cart} setCart={setCart} />
            ))}


        </div>
    )
}

export default Products