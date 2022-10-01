import React from 'react'
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Card = ({item,handleShowProductDetails}) => {
  return (
    <div className='card__container'>
      <div className='card__container_imageContainer'  onClick={()=>handleShowProductDetails(item)}>
        <img alt='product image' src={item.image} className='card__container_imageContainer_image'/>
      </div>
      <div className='card__container_textContainer'>
        <h1>{item.name}</h1>
        <h2>{item?._category?.name}</h2>
        <h3>${item?.price}</h3>
      </div>
      <div className='card__icon_container'>
        <div className='card__icon1' onClick={()=>handleShowProductDetails(item)}><FontAwesomeIcon icon={faEye} /></div>
        <div className='card__icon1'><FontAwesomeIcon icon={faShoppingCart} /></div>
      </div>
    </div>
  )
}

export default Card
