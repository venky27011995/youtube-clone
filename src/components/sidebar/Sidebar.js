import React from 'react'
import "./_sidebar.scss"
import { 
  MdSubscriptions, MdExitToApp, MdThumbUp, MdHistory, MdLibraryBooks, MdHome, MdSentimentDissatisfied
 } from 'react-icons/md'

const Sidebar = ({sidebar, handleSidebarToggle}) => {
  return (
    <nav className={sidebar ? "sidebar open mobileMenu" : "sidebar"} onClick={()=>handleSidebarToggle(false)}>
      <li className='sidebar__menuItem'>
        <MdHome size={23}/> <span className='sidebar__menuItem--text'>Home</span>
      </li>
      <li className='sidebar__menuItem'>
        <MdSubscriptions size={23}/> <span  className='sidebar__menuItem--text'>Subscriptions</span>
      </li>
      <li className='sidebar__menuItem'>
        <MdLibraryBooks size={23}/> <span  className='sidebar__menuItem--text'>Library</span>
      </li>
      <li className='sidebar__menuItem'>
        <MdHistory size={23}/> <span  className='sidebar__menuItem--text'>History</span>
      </li>
      <li className='sidebar__menuItem'>
        <MdThumbUp size={23}/> <span  className='sidebar__menuItem--text'>Liked Videos</span>
      </li>
      <li className='sidebar__menuItem'>
        <MdSentimentDissatisfied size={23}/> <span  className='sidebar__menuItem--text'>I Don't Know</span>
      </li>
      <li className='sidebar__menuItem'>
        <MdExitToApp size={23}/> <span  className='sidebar__menuItem--text'>Log Out</span>
      </li>
      <hr />
    </nav>
  )
}

export default Sidebar