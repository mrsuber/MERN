import {Header,Banner,Card,ProductDetailModal,Productfilter} from '../../components'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getproducts } from '../../redux/actions/productAction';
import './home.css'
import { useState } from 'react';


const initialQuery ={
  skip:0,
  filters:{price:{$gte: 4, $lte: 50}}
}


const Home =()=>{
  const {product} = useSelector(state=>state)
  const dispatch = useDispatch()
  const [ selectedProduct, setSelectedProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [query, setQuery] = useState(initialQuery)


  useEffect(()=>{
    const getallproduct = async()=>{
      await(dispatch(getproducts(query)))
    }
    getallproduct()
  },[dispatch, query])

  
  const handleShowProductDetails = (item) =>{
    setSelectedProduct(item)
    setShowModal(true)
  }

  const handleCancel = ()=>{
    setShowModal(false)
  }

  const handleLoadMore = async() =>{
    const newQuery = {
      ...query,
      skip: query.skip + 8,
      loadMore: true,

    }
    setQuery(newQuery)
    await dispatch(getproducts(newQuery))
  }

  const handleSearchProduct = (filters) =>{
    
    const newQuery ={
      skip:0,
      filters,
    }
    setQuery(newQuery)
    dispatch(getproducts(newQuery))
  }

  const handleClearSearchProduct =()=>{
    setQuery(initialQuery)
    dispatch(getproducts(initialQuery))
  }

 
  
  return (
    <div className="Home__mainPage">
    <Header />
      <Banner/>
      <Productfilter onSearch={handleSearchProduct} onClear={handleClearSearchProduct} initialFilters={initialQuery.filters}/>
      
      <div className='cardsection'>
        {product?.products.map((item, index)=>(
        <Card key={index} item={item} handleShowProductDetails={handleShowProductDetails}/>
      ))}
      </div>
      
      <ProductDetailModal visible={showModal} product={selectedProduct} onCancel={handleCancel}/>
        <div className='product-load-more'>
          {query?.skip <= product?.products?.length ? (
            <>
            <button onClick={handleLoadMore}>Load more</button>
            </>
          ):(<p>No mor products</p>)}
        </div>
    </div>
  )
}


export default Home
