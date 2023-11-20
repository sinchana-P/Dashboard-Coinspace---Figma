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
    <Card>
      <div className="header-container">
        <div>
          <div><BsFilterRight size={21} className="header-icons" /></div>
          <div><IoCubeOutline size={21} className="header-icons" /></div>
          <div><Input size="small" placeholder="search" prefix={<CiSearch />} /></div>       
        </div>
        <d
        </div>
    </Card>
  )
}

