import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryList } from '../../redux/actions/categoryAction'
import './productfilter.css'



const Productfilter = (props) => {
  const {initialFilters,onSearch,onClear} = props
  const [filters, setFilters] = useState(initialFilters)
  const [keyword, setKeyword] = useState(null)
  const {category} = useSelector(state=>state) 
  const dispatch = useDispatch()
  
  // const initialCatState = {
  //   product_category:''
  // }
  // const [catData, setCatData] = useState(initialCatState)
  // const {product_category} = catData
  // const handleCatChangeInput = e =>{
  //   const {name, value} = e.target
  //   setCatData({...catData, [name]:value})
  //   setFilters({
  //     ...filters,
  //     _category:product_category
  //   })
  // }

 


  useEffect(()=>{
    dispatch(getCategoryList())
},[dispatch])

  const handleSelectCategory = (e)=>{
    const value = e.target.value
    setFilters({
      ...filters,
      _category:value
    })
  }
  const handleKeywordChange = (e)=>{
    const value = e.target.value;
    setKeyword(value)
    setFilters({
      ...filters,
      name:{$regex:value, $options: "i"}
    })
  }

  const handleSearch = () =>{
    onSearch(filters)
    
  }

  const handleClearSearch = ()=>{
    setKeyword(null)
    setFilters(initialFilters)
    onClear()
  }
  return (
    <div className='product_filter__row'>
      <div className='product_filter__row_col'>
        <input placeholder='Enter keyword' value={keyword} onChange={handleKeywordChange} />
      </div>
      <div className='product_filter__row_col'>
      
        <select placeholder='Select category' id="product_category" name="product_category" value={filters._category} onChange={handleSelectCategory}>
          {category?.categories?.map((catItem,index)=>(
            <option value={catItem._id}>{catItem.name}</option>
          ))
          }
        </select>
  
      </div>
     
      <div className='product_filter__row_col'>
        <div className='product_filter__row_col_row'>
          <div className='product_filter__row_col_row_col'>
            <p>Price From</p>
          </div>
          <div className='product_filter__row_col_row_col'>
            <div class="product_filter__row_col_row_col_slider">
              <input type="range" min="0" max="50" value={filters.price.$gte} oninput="innertext" />
            
            </div>
          </div>
          <div className='product_filter__row_col_row_col'>
            <input type="Number" min="0" max="50" value={filters.price.$gte}/>
          </div>
        </div>
      </div>

      <div className='product_filter__row_col'>
        <div className='product_filter__row_col_row'>
          <div className='product_filter__row_col_row_col'>
            <p>Price To</p>
          </div>
          <div className='product_filter__row_col_row_col'>
            <div class="product_filter__row_col_row_col_slider">
              <input type="range" min="0" max="50" value={filters.price.$lte} oninput="innertext" />
              
            </div>
          </div>
          <div className='product_filter__row_col_row_col'>
            <input type="Number" min="0" max="50" value={filters.price.$lte}/>
          </div>
        </div>
      </div>

      <div className='another_col_1'>
        <button onClick={handleSearch}>search</button>
        <button onClick={handleClearSearch}>clear</button>
      </div>

    </div>
  )
}

export default Productfilter
