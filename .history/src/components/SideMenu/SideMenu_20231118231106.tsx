import { useState } from 'react'
import Sider from 'antd/es/layout/Sider'

import { Divider, Menu, Switch } from 'antd'
import { AiFillHome } from "react-icons/ai";
import { RiExchangeFill } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa6";

import type { MenuTheme } from 'antd';

import './SideMenu.css'

export const SideMenu = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  console.log("Sidemenu")
  
  const changeTheme = (value: boolean) => {
    // setTheme(value ? 'dark' : 'light');
  };

  
  return (
        <Sider 
          className='sider-container'
          // theme="light"
          // style={{ backgroundColor: "#001529" }}
        >   
          <div className='logo-container'>
            <TbTriangleSquareCircleFilled size={22} color={"#6487EC"} />
            <h3>COINSPACE</h3>
          </div>

          <Divider className='divider'/>

          <div className='quick-access-container'>
            <h1>Quick Access</h1>

            <Switch 
              checked={theme === 'light'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />

            <Menu
              mode="inline"
              // theme="dark"
              className='quick-access-menu'
              // style = {{ width: 200 }}
              // style={{ backgroundColor: "#001529" }}
              items = {[
                {
                  label: "Dashboard",
                  key:"dashboard",
                  icon: <AiFillHome size={21} />
                },
                {
                  label: "Exchange",
                  key:"exchange",
                  icon: <RiExchangeFill size={21} />
                },
                {
                  label: "My Wallet",
                  key:"mywallet",
                  icon: <SlWallet size={21} />
                },
                {
                  label: "Tradeview",
                  key:"tradeview",
                  icon: <BsGraphUpArrow size={21} />
                },
              ]}
            >

            </Menu>
          </div>

          <div className='service-container'>
            <h1>Service</h1>
            
            <Menu
              mode='inline'
              // theme="dark"
              className='service-menu'
              // style={{ backgroundColor: "#001529" }}
              items = {[
                {
                  label: "Transactions",
                  key:"transactions",
                  icon: <BsBank2 /> ,
                  children: [
                    {
                      label: "Buy & Sell Coin",
                      key: "buyandsellcoin",
                    },
                    {
                      label: "Deposit Yen",
                      key: "deposityen",
                    },
                    {
                      label: "withdraw Yen",
                      key: "withdrawyen",
                    },
                    {
                      label: "Send Coin",
                      key: "sendcoin",
                    },
                    {
                      label: "Receive Coin",
                      key: "receivecoin",
                    },
                    {
                      label: "Deposit Coin",
                      key: "depositcoin",
                    },
                  ]
                },
                {
                  label: "Rewards",
                  key: "rewards",
                  icon: <FaGift />,
                  children: [
                    {
                      label: "Rewards",
                      key: "reward",
                    }
                  ]
                },
                {
                  label: "Utility Plan",
                  key: "utilityplan",
                  icon: <TbBulb />,
                  children: [
                    {
                      key: "plan",
                      label: "Plan"
                    }
                  ]
                }
                
              ]}
            >
            </Menu>
   
          </div>

          <div className='account-container'>
              <h1>Account</h1>
              <Menu
              mode='inline'
              // theme='dark'
              className='account-menu'
              // style={{ backgroundColor: "#001529" }}
                items = {[
                  {
                    label: "Notification",
                    key: "notification",
                    icon: <HiOutlineSpeakerphone />
                  },
                  {
                    label: "Settings",
                    key: "settings",
                    icon: <IoSettingsOutline />
                    ,
                  },
                  {
                    label: "FAQ",
                    key: "faq",
                    icon: <FaRegQuestionCircle />
                  }
                ]}
              >
              </Menu>
          </div>

          <div className='logout-container'>
          <Divider className='divider'/>
            <Menu
              mode='inline'
              // theme='dark'
              className='logout-menu'
              // style={{ backgroundColor: "#001529" }}
              items = {[
                {
                  key: "logout",
                  label: "Log Out",
                  icon: <FaPowerOff />
                }
              ]}
            >
            </Menu>
            
          </div> 
          
        </Sider>
    
  )
}

