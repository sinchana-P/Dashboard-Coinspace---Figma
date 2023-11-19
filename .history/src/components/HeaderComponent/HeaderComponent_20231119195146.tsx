import React from 'react'
import { Card, Input, Avatar } from 'antd'
import { BsFilterRight } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import './HeaderComponent.css'

export const HeaderComponent = () => {
  return (
    <Card className='header-container'>
      <div><BsFilterRight size={21} className="header-icons" /></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      
      
<Input size="small" placeholder="search" prefix={<CiSearch />} />
<Avatar src="https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="header-icons" />
<IoSettingsOutline size={21} className="header-icons" />
<HiOutlineSpeakerphone size={21} className="header-icons" />
<Avatar src="https://th.bing.com/th/id/OIP.-UhCusNp-fNE_DruwEZkXwHaF3?pid=ImgDet&rs=1" className="header-icons" />
    </Card>
  )
}

