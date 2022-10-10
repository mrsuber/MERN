import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components";
import  moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderHistory } from '../../redux/actions/orderAction';


const OrderHistory = () => {
  const navigate = useNavigate()
  const {auth,order} = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(()=>{
      const getOrderhistory = ()=>{
        dispatch(getOrderHistory({token:auth.token}))
      }
      getOrderhistory()
  },[auth.token, dispatch])
  return (
    <div className="Home__mainPage">
      <Header/>
      <h1>YOur Order History </h1>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default OrderHistory
