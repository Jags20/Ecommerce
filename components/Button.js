import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/store/slices/basketSlice';

function Button({item}) {

    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(addToBasket(item));
    }
  return (
    <button onClick={() => addToCart(item)}>Add To Cart</button>
  )
}

export default Button;