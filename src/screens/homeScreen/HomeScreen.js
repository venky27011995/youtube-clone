import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../components/categories/CategoriesBar'
import Video from '../../components/video/Video'
import '../../_app.scss';

const HomeScreen = ({sidebar}) => {
  const [yData, setYData] =useState([]);
  
  useEffect(()=>{
    const fetchData = () => {
      fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&contentDetails&statistics&chart=mostPopular&regionCode=US&key=AIzaSyDK3CPtTFICasvLJah2wqMvLoUIlP42MZU')
      .then(res => res.json()).then(data => setYData(data.items))
    }
    // fetchData()
  },[yData])
  console.log(yData)
  
  return (
    <div className= 'container-fluid p-0'>
        <hr style={{margin:0}} />
        <CategoriesBar />
        <hr style={{margin:0}} />
        <div className="home__content">
            {[...Array(20)].map(()=>(
                <div className='home__content--box' lg={3} md={4} >
                    <Video thumbnail="https://i.ytimg.com/vi/Vbu44JdN12s/hq720.jpg" />
                </div>
            ))}
            {/* {yData?.map((video)=>(
                <div className='home__content--box' lg={3} md={4} key={video.snippet.thumbnails.high.url}>
                    <Video thumbnail={video.snippet.thumbnails.high.url} />
                </div>
            ))} */}
        </div>
    </div>
  )
}

export default HomeScreen