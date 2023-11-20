import { Layout, Space, Card, Select, Button, Divider, Row, Col } from 'antd'
import { GiRingingBell  } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaEthereum } from "react-icons/fa";
import { TbBrandNem } from "react-icons/tb";
import { SiXrp } from "react-icons/si";
import { TbArrowsDownUp } from "react-icons/tb";
import { SiBitcoincash } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { TbCurrencyEthereum } from "react-icons/tb";

import './Chart.less'

export const Chart = () => {
  return (
    <Layout >
                
    {/* <Card className='chart-container'>
      <Space direction="horizontal"> */}
      
      <div className="chart-container">
        <Row gutter={0}>
        <div className="chart-sec-left"> 
          <Col>
            <Card style={{ borderRadius: "0px" }}>                       
                <div className='chart-sec-1'>
                  <div className='chart-sec-1-text'>
                    <h2>BTC</h2>
                    <Space wrap>
                    <div>
                        <Select
                          defaultValue="/JPY"
                          // style={{ width: 120 }}
                          bordered={false}
                          options={[
                            { value: 'jpy', label: '/JPY' },
                            { value: 'jpy2', label: 'JPY2' },
                            { value: 'jpy3', label: 'JPY3' },
                          ]}
                        />
                        
                      
                    </div>
                    </Space>
                  </div>
                
                  <div>
                    <Button className='buy-button'>BUY</Button>                          
                  </div>        
                </div>
                
                <Divider style={{ margin: "0px" }} />
              
                <div className='chart-sec-2'>
                  <div className='chart-sec-2-text'>
                    <h2>721,882</h2>
                    <p className='pink-font'>-4.66%  <GoArrowDown /></p>                  
                  </div>
                  <div className='chart-sec-2-text'>
                    <p className='grey-font'>High</p>                  
                    <h2>725,974</h2>
                  </div>
                  <div className='chart-sec-2-text'>
                    <p className='grey-font'>Low</p>                  
                    <h2>718,000</h2>
                  </div>
                  <div className='chart-sec-2-text'>
                    <p className='grey-font'>24h Volume</p>                  
                    <h2>677.7 BTC</h2>
                  </div>
                  <div className='chart-sec-2-text price-alert'>
                    <p className='grey-font'>Price Alert</p>                  
                    <div>
                      <GiRingingBell size={34} style={{color: "#130EAD"}} />
                    </div>
                  </div>
                  
                </div>
              
            </Card>
          </Col>
        </div>  

          <Col>
          <div className='chart-sec-right'>
            <Card>             
                
          
            </Card>     
          </div>   
          </Col>

        </Row>
      </div>

      
  
    </Layout>
  )
}



