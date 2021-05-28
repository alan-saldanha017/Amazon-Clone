import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket= () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <small className="checkoutProduct__price">{price}</small>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i)=> (
                                            <span>⭐</span>

                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
