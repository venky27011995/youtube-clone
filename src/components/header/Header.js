import React, { useState } from 'react'
import "./_header.scss"
import Logo from '../../assets/images/logo.svg'

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineNotifications, MdApps } from "react-icons/md"

const Header = ({handleSidebarToggle}) => {
  const [searchInput, SetSearchInput] = useState("")

  return (
    <div className='container-fluid header'>
      <FaBars 
      className='header__menu' size={26} onClick={handleSidebarToggle} />
      <img src={Logo} className='header__logo' alt='logo' />
      <form className='header__searchForm'>
        <input type="text" placeholder='Search' className="header__search" onChange={(e)=>SetSearchInput(e.target.value)} />
        <button type='submit' className='header__searchBtn'>
        <AiOutlineSearch className='header__searchIcon' size={22} color="black" />
        </button>
      </form>
      <div className='header__iconsRight'>
        <MdOutlineNotifications className='header__iconsRight--Icon header__notificationIcon' size={26} />
        <MdApps className='header__appsIcon header__iconsRight--Icon' size={26} />
        <img src='https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png' className='header__userImg' alt='avatar icon' />
      </div>
      </div>
  )
}

export default Header