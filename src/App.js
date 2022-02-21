import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import './_app.scss'

const App = () => {
  const [sidebarToggle,SetSidebarToggle] = useState(true);

  const handleSidebarToggle = () =>{ 
    SetSidebarToggle(!sidebarToggle);
    console.log(sidebarToggle)
  }

  return (
    <>
        <Header handleSidebarToggle={handleSidebarToggle} />
        <div className='app_container'>
            {sidebarToggle && <Sidebar sidebar={sidebarToggle} handleSidebarToggle={handleSidebarToggle} />}
            <Container fluid className='app__main p-0'>
                <HomeScreen sidebar={sidebarToggle} />
            </Container>
        </div>
    </>
  )
}

export default App