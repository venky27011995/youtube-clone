import React from 'react'
import './_video.scss'
import {AiFillEye} from 'react-icons/ai'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Video = ({thumbnail}) => {
  return (
    <div className="video">
      <div className="video__top">
        <img src={thumbnail} />
        <span>05:43</span>
      </div>
      <div className="video__bottom">
        <div className="video__bottom--left">
          <img className='video__bottom--left--channelIcon' 
                src='https://yt3.ggpht.com/Xasj7Goij-ghD1aE9f1w3eB8agBLzSzbZqORdDdvnz5q6DYUo0tpP9Vs1MFz5UJPdK25j8bJQNM=s68-c-k-c0x00ffffff-no-rj'/>
        </div> 
        <div className="video__bottom--right">
          <div className="video__bottom--right--title">
            <span>Kalaavathi - Music Video | Sarkaru Vaari Paata | Mahesh Babu | Keerthy Suresh | Thaman S | Parasuram</span>
          </div>
          <div className="video__bottom--right--channel">
            <span>Saregam Telugu </span><BsFillCheckCircleFill className='channel-tick' />
          </div>
          <div className="video__bottom--right--details">
            <AiFillEye className='view_icon' />
            <span className='views'>20m Views</span>
            <span className='time'>&#8226; 2 days ago</span>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Video