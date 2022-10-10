import React from 'react'
import './productdetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { addToCart } from "../../redux/actions/cartAction";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


const ProductDetailModal = ({visible, product, onCancel}) => {
    const {auth} = useSelector(state=>state)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (e)=>{
      const value = e.target.value
      setQuantity(value)
    }
    const handleAddToCart = (item)=>{
      const data = {
        _productId:item._id,
        quantity,
    
      }
      dispatch(addToCart({data:data,token:auth.token}))
      setQuantity(1)
      onCancel(true)
     }
  return (
    <>
    {
      visible? <div className='productdetail_container'>
        <div className='productdetail_container_card'>
          <div className='productdetail_container_card_header'><h3>{product?.name}</h3><span onClick={()=>onCancel(false)}><FontAwesomeIcon icon={faTimes}/></span></div>
       <div className='productdetail_container_card_body'> 
            <div className='productdetail_container_card_body_image'>
              <img alt="item_image" src={product?.image} />
            </div>
            <div className='productdetail_container_card_body_details'>
            <h3>{product?.name}</h3>
            <h4>{product?._category?.name}</h4>
            <h5>${product?.price}</h5>
            <div  className='productdetail_container_card_body_details_input' >
              <h4>quantity</h4>
              <input type="Number" value={quantity} onChange={handleQuantityChange}/>
              <button onClick={()=>handleAddToCart(product)}><FontAwesomeIcon icon={faCartShopping}/>Add to cart</button>
            </div>
            </div>
       </div>
        </div>
     
    </div>:<></>
    }
    </>
   
  )
}

export default ProductDetailModal
