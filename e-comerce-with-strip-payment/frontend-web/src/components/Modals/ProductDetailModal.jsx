import React from 'react'
import './productdetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCartShopping} from '@fortawesome/free-solid-svg-icons';

const ProductDetailModal = ({visible, product, onCancel}) => {
    
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
              <input type="Number" />
              <button><FontAwesomeIcon icon={faCartShopping}/>Add to cart</button>
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
