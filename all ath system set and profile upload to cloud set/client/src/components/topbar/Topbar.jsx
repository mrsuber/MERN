import React from 'react'
import './Topbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Avatar} from '../../components'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Topbar = () => {
const {auth} = useSelector(state => state)


  function toggleMenu(){
    let toggle = document.querySelector('.admin__topbar')
    let navigation = document.querySelector('.admin__navigation')
    let main = document.querySelector('.admin__main')

    toggle.classList.toggle('admin__active')
    navigation.classList.toggle('admin__active')
    main.classList.toggle('admin__active')

  }

  return (
    <div className="admin__topbar">
      <div className="admin__toggle" onClick={toggleMenu}><FontAwesomeIcon icon={faBars}/></div>

        <div className="admin__user">
        <Link to={`/profile/${auth.user._id}`}>
        <Avatar src={auth.user.avatar} size="big__avatar"/>
        </Link>

        </div>
      </div>
  )
}

export default Topbar
