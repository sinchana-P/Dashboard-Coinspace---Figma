import React from 'react'
import { Card } from 'antd'
import './TopSection.css'

import { FaBitcoin } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaEthereum } from "react-icons/fa";
import { TbBrandNem } from "react-icons/tb";
import { SiXrp } from "react-icons/si";

export const TopSection = () => {
  return (
    <div className='top-section-container-main'>
      <div className='welcome-container'>
        <p>Welcome</p>
        <p>Dashboard</p>
      </div>

      <div className='top-section-container'>
          {/* <Card className='top-card' style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}> */}
          <Card className='top-card'>
              {/* <FaBitcoin size={32} className={"coin-logo"} style={{ color: "#FFC246" }} /> */}

              <div className='top-card-text'>
                <h1>BTC</h1>
                <p>Bitcoin</p>
              </div>
              <div className="top-card-currency">
                <h1>¥ 721,882</h1>
                <p className='pink-font'>-4.66%  <GoArrowDown /></p>
              </div>
          </Card>
          <Card className='top-card'>
              <FaEthereum size={20} style={{ color: "white", backgroundColor: "#5470DE", width: "45px", height: "45px", borderRadius: "50%", padding: "6px" }}/>
              <div className='top-card-text'>
                <h1>ETH</h1>
                <p>Ethereum</p>
              </div>
              <div className="top-card-currency">
                <h1>¥ 22,370</h1>
                <p className='green-font'>+0.45% <BsArrowUp /></p>
              </div>
          </Card>
          <Card className='top-card'>
              <TbBrandNem size={20} style={{ color: "white", backgroundColor: "#07BEAA", width: "45px", height: "45px", borderRadius: "50%", padding: "6px" }}/>
              <div className='top-card-text'>
                <h1>XEM</h1>
                <p>NEM</p>
              </div>
              <div className="top-card-currency">
                <h1>¥ 10.604</h1>
                <p className='pink-font'>-1.07%  <GoArrowDown /></p>
              </div>
          </Card>
          <Card className='top-card'>
              <SiXrp size={20} style={{ color: "white", backgroundColor: "#1786C4", width: "45px", height: "45px", borderRadius: "50%", padding: "6px" }}/>
              <div className='top-card-text'>
                <h1>XRP</h1>
                <p>Ripple</p>
              </div>
              <div className="top-card-currency">
                <h1>¥ 50.839</h1>
                <p className='green-font'>+0.66% <BsArrowUp /> </p>
              </div>
          </Card>
      </div>

    </div>
  )
}

