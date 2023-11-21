// import * as Line from "src\components\Line";
import { Card } from 'antd'
import './TopSection.css'

import { FaBitcoin } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaEthereum } from "react-icons/fa";
import { TbBrandNem } from "react-icons/tb";
import { SiXrp } from "react-icons/si";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import LineChart3 from './L';

// import Line from "./Line";

export const TopSection = () => {

  // const components = [
  //   ["Line", Line]
  // ];

    // Example data
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

  return (
    <div className='top-section-container-main'>
      <div className='welcome-icons-container'>
        <div className='welcome-container'>
          <p>Welcome</p>
          <p>Dashboard</p>
        </div>

        <div className='icons-container'>
          <div className='icons-right squares'><HiOutlineSquares2X2 /></div>
          <div className='icons-right arrow'><SlArrowLeft /></div>
          <div className='icons-right arrow'><SlArrowRight /></div>
        </div>
      </div>

    
      <div className='top-section-container'>

      <div className='card-component'>
            <Card >
              <div>
                <div className='top-card'>                  
                  <div className='top-card-each-col'>
                    <FaBitcoin size={20} style={{ color: "white", backgroundColor: "#FFC246", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }} />
                  </div>
                  <div className='top-card-text top-card-each-col'>
                    <h1>BTC</h1>
                    <p>Bitcoin</p>
                  </div>
                  <div className="top-card-currency">
                    <h1>¥ 721,882</h1>
                    <p className='pink-font'>-4.66%  <GoArrowDown /></p>
                  </div>
                  
                </div>
                
                <div>
                  
                  <div>
                    <LineChart3 data={chartData} />
                    {/* {components.map(([label, Comp]) => {
                      return (
                        <div key={label + ""}>
                          <h1>{label}</h1>
                          <div>
                            <Comp />
                          </div>
                        </div>
                      );
                    })} */}
                    {/* <div style={{ height: "50rem" }} /> */}
                  </div>
                </div>
              </div>

            </Card>
          </div>

          

          <div className='card-component'>
            <Card>
              <div>
                <div className='top-card'>
                  <div className='top-card-each-col'>
                    <FaEthereum size={20} style={{ color: "white", backgroundColor: "#5470DE", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }}/>
                  </div>
                  <div className='top-card-text'>
                    <h1>ETH</h1>
                    <p>Ethereum</p>
                  </div>
                  <div className="top-card-currency">
                    <h1>¥ 22,370</h1>
                    <p className='green-font'>+0.45% <BsArrowUp /></p>
                  </div>
                </div>
                
                <div>
                  <div>
                      graph
                  </div>
                </div>

              </div>
            </Card>
          </div>

          <div className='card-component'>
            <Card>
              <div>
                <div className='top-card'>
                  <div className='top-card-each-col'>
                    <TbBrandNem size={20} style={{ color: "white", backgroundColor: "#07BEAA", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }}/>
                  </div>
                  <div className='top-card-text'>
                    <h1>XEM</h1>
                    <p>NEM</p>
                  </div>
                  <div className="top-card-currency">
                    <h1>¥ 10.604</h1>
                    <p className='pink-font'>-1.07%  <GoArrowDown /></p>
                  </div>
                </div> 

                <div>
                  <div>
                      graph
                  </div>
                </div>   

              </div>           
            </Card>
          </div>

          <div className='card-component'>
            <Card>
              <div>
                <div className='top-card'>
                  <div className='top-card-each-col'>
                    <SiXrp size={20} style={{ color: "white", backgroundColor: "#1786C4", width: "30px", height: "30px", borderRadius: "50%", padding: "6px" }}/>
                  </div>
                  <div className='top-card-text'>
                    <h1>XRP</h1>
                    <p>Ripple</p>
                  </div>
                  <div className="top-card-currency">
                    <h1>¥ 50.839</h1>
                    <p className='green-font'>+0.66% <BsArrowUp /> </p>
                  </div>
                </div>    
              </div> 

              <div>
                <div>
                    graph
                </div>
              </div>          
            </Card>
          </div>
      </div>

    </div>
  )
}

