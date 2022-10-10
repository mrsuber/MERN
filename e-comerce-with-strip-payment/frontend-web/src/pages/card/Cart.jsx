import { useDispatch, useSelector } from "react-redux";
import { Header,OrderResultModal } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrash,faSave, faRefresh} from '@fortawesome/free-solid-svg-icons';
import { sumBy } from "lodash";
import StripeCheckout from 'react-stripe-checkout'
import './card.css'
import { useState } from "react";
import { clearCart, removeCartItem, updateCartItem } from "../../redux/actions/cartAction";
import { checkout } from "../../redux/actions/orderAction";
const Cart =()=>{
  const {cart,auth} = useSelector(state=>state)
  const cartItems = cart?.cartItems?.cartDetails
  const [editItem, setEditItem] = useState(null)

  const [quantity, setQuantity] = useState(null)
  const [showResultModal,setShowResultModal]=useState(false)
  const dispatch = useDispatch()

  const handleUpdateCartItem = (item)=>{
    const data = {
      _productId: item?._product?._id,
      quantity:quantity,
    }
    dispatch(updateCartItem({data:data,token:auth.token}))
  }




  const handleEdit = (item)=>{
    setEditItem(item)
    setQuantity(item.quantity)
  }

  const handleRemove = (item)=>{
    const data={
      productId:item._product._id,
      token:auth.token
    }
    dispatch(removeCartItem(data))
  }

  const handleReset = ()=>{
      setEditItem(null)
  }

  const handleSave = (item)=>{
    handleUpdateCartItem(item)
  }

  const handleQuantityChange =(e)=>{
    const value = e.target.value
    setQuantity(value)
  }

  const handlePayout =(token, total)=>{
    
      dispatch(checkout({token,total,authtoken:auth?.token}))
      dispatch(clearCart())
      setShowResultModal(true)
  }
const renderCheckout = ()=>{
  const total = sumBy(cartItems, (item) => item.amount);
  if(cartItems?.length >0){
    return(
      <center>
        <p>Total Amount: ${total}</p>
        <StripeCheckout
          name="Payment" 
          email={auth?.user?.email}
          description="Payment for Products"
          amount={total*100}
          token={(token)=>handlePayout(token,total)}
          stripeKey="pk_test_51JLaHtBBZYlnWgxJEWpAoMZwh0wQPlafhJabaSASYYqiajF40exKqHTKmErb2ButSJRwgHdfxOuqfjNzy8yVTPvz00SF3r6UZj"
          >
            <button>Checkout</button>
          </StripeCheckout>
      </center>
    )
  }
}
  return (
   
    <div className="Home__mainPage">
    <Header/>
      <div className="page-wrapper">
          
              {/*<Table columns={columns} dataSource={cartItems} scroll={{x:1300}}/>*/}
              {renderCheckout()}
              <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems?.map((item, index)=>(
                        <tr key={index}>
                      <th scope="row">
                        <img src={item?._product?.image} alt={item?._product?.name} className="cart__item_image"/>
                        <p>{item?._product?.name}</p>
                      </th>
                      <td>${item.price}</td>
                      <td>{editItem?._product?._id === item?._product?._id ? <input type="number" value={quantity} onChange={handleQuantityChange}/>:<span>{item?.quantity}</span>
                       }</td>
                      <td>${item.amount}</td>
                      <td>
                        {
                          editItem?._product?._id === item?._product?._id 
                          ?<>
                          <button onClick={()=>handleReset(item)}><FontAwesomeIcon icon={faRefresh}/>reset</button>
                          <button onClick={()=>handleSave(item)}><FontAwesomeIcon icon={faSave}/>save</button>

                          </>
                          :<button onClick={()=>handleEdit(item)}><FontAwesomeIcon icon={faEdit}/>update</button>
                        }
                        
                        <button onClick={()=>handleRemove(item)}><FontAwesomeIcon icon={faTrash}/>remove</button>
                        </td>
                    </tr>
                      ))
                    }
                    
                    
                  </tbody>
                </table>

      </div>
      <OrderResultModal visible={showResultModal} onCancel={()=>setShowResultModal(false)}/>
    </div>
  )
}


export default Cart
