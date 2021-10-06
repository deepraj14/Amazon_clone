import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,price,rating,title}) {

const[{basket},dispatch]=useStateValue();
const removeBasket=()=>{
    dispatch({
        
        type:"REMOVE_FROM_BASKET",
        id:id

})
}

    return (
        <div>
            <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="img" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <i class="fa-solid fa-star"></i>
                    ))}
                </div>
            
                <button onClick={()=>{removeBasket()}}>Remove from Basket</button>
                
            </div>
        </div>
        </div>
    )
}

export default CheckoutProduct
