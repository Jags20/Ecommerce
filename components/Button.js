import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/store/slices/basketSlice';
import { useState } from 'react';
import ModalD from './ModalD';

const Button = ({item}) => {

    const [isOpen , setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(addToBasket(item));
    }
  return (
    <>
    <button style={{
      width:"180px",
      background:"rgb(224,170,21)",
      fontSize:"1.1rem",
      border:"rgb(224,170,21)",
      color:"white",
      // margin:"1.5rem",
      padding:"1rem",
      borderRadius:"10%", 
    }} onClick={() => {
        addToCart(item)
        setIsOpen(true)
          }  }>
              Add To Cart
    </button>
    {isOpen && <ModalD setIsOpen={setIsOpen} />}
    </>
  )
}

export default Button;