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

import LineChart3 from '../LineChart3';

import './Chart.less'
// import CandlestickChart from '../CandlestickChart';

export const Chart = () => {

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 71, 33, 31],
        fill: true,
        backgroundColor: '#FFDA93',
        // backgroundColor: [
        //   'rgba(255, 194, 70, 0.2)',
        //   'rgba(249, 200, 102, 0.2)',
        //   'rgba(242, 206, 132, 0.2)',
        //   'rgba(236, 211, 161, 0.2)',
        //   'rgba(229, 216, 189, 0.2)',
        // ],          // backgroundColor: '#EEA241', // Change the fill color
        // borderColor: 'rgb(75, 192, 192)',
        borderColor: '#FFC246',
        tension: 0.4, // Adjust the tension for a smooth curve
      },
    ],
  };

  // const candlestickData = {
  //   labels: ['January', 'February', 'March', 'April', 'May'],
  //   datasets: [
  //     {
  //       label: 'Candlestick Chart',
  //       data: [
  //         { t: 0, o: 62, h: 84, l: 59, c: 72 },
  //         { t: 1, o: 70, h: 90, l: 62, c: 80 },
  //         { t: 2, o: 74, h: 86, l: 60, c: 78 },
  //         { t: 3, o: 78, h: 88, l: 66, c: 82 },
  //         { t: 4, o: 82, h: 94, l: 70, c: 90 },
  //       ],
  //     },
  //   ],
  // };


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

                <div>
                  graph
                  {/* <CandlestickChart data={candlestickData} /> */}
                </div>
              
            </Card>
          </Col>
        </div>  

          <Col>
          <div>
            <Card style={{ borderRadius: "0px" }}>             
                <div className='chart-sec-right'>
                  <div className='chart-sec-right-header'>
                    <h1>Market Cap</h1>
                    <TbArrowsDownUp size={22} style={{ color: "grey" }} />
                  </div>
                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <FaBitcoin size={18} style={{ color: "white", backgroundColor: "#FFC246", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>BTC</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 721,882</h2>
                      <p className='pink-font'>-4.66%  <GoArrowDown /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <SiBitcoincash size={18} style={{ color: "white", backgroundColor: "#DE510F", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>BCH</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 48,676</h2>
                      <p className='green-font'>+0.38%  <BsArrowUp /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <FaEthereum size={18} style={{ color: "white", backgroundColor: "#1E11D6", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>ETH</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 22,370</h2>
                      <p className='green-font'>+0.45%  <BsArrowUp /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <SiLitecoin size={18} style={{ color: "white", backgroundColor: "#AA9B94", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>LTC</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 5,788.5</h2>
                      <p className='pink-font'>-0.23%  <GoArrowDown /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <TbCurrencyEthereum size={18} style={{ color: "white", backgroundColor: "#19B73C", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>ETC</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 1,660.7</h2>
                      <p className='pink-font'>-0.09%  <GoArrowDown /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <SiXrp size={18} style={{ color: "white", backgroundColor: "#4F6BE8", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>XRP</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 50.839</h2>
                      <p className='green-font'>+0.66%  <BsArrowUp /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <FaBitcoin size={18} style={{ color: "white", backgroundColor: "#5D8BAD", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>FCT</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 534.68</h2>
                      <p className='green-font'>+8.47%  <BsArrowUp /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <FaBitcoin size={18} style={{ color: "white", backgroundColor: "#08316A", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>LSK</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 321.14</h2>
                      <p className='pink-font'>-0.47%  <GoArrowDown /></p>                 
                    </div>    
                  </div>

                  <div className='market-cap-div'>
                    <div className='market-cap-div-left'>
                      <TbBrandNem size={18} style={{ color: "white", backgroundColor: "#77ECC7", width: "28px", height: "28px", borderRadius: "50%", padding: "6px" }} />
                      <h2>XEM</h2>
                    </div>               
                    <div className='market-cap-div-right'>
                      <h2>¥ 10.604</h2>
                      <p className='pink-font'>-1.07%  <GoArrowDown /></p>                 
                    </div>    
                  </div>
                
              
                </div>
          
            </Card>     
          </div>   
          </Col>

        </Row>
      </div>

      
  
    </Layout>
  )
}



