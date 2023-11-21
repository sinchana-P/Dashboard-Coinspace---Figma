import { Layout } from 'antd'
import './App.css'
import { SideMenu } from './components/SideMenu/SideMenu'
import { ContentSection } from './components/ContentSection/ContentSection'
import { FileTextOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { FiMessageSquare } from "react-icons/fi";

import { LineChartComp } from './components/LineChartComp'
import { LineChart2 } from './components/LineChart2'
import LineChart3 from './components/LineChart3';
// import 'react-chartjs-2/dist/react-chartjs-2.css';

function App() {

  return (
    <Layout className='layout-container'>
      <Layout>
        <SideMenu />
        <ContentSection />   
        <div>
          <FloatButton
            icon={<FiMessageSquare />}
            // description="HELP INFO"
            shape="square"
            type="primary"
            style={{ right: 56, }}
          />

        {/* <FloatButton
          href="https://ant.design/index-cn"
          tooltip={<div>custom badge color</div>}
          badge={{ count: 5, color: 'blue' }}
        /> */}
        </div> 
         
      </Layout>

      <div className='chart-div'>
        {/* <LineChartComp />   */}
        <LineChart3 />
        <LineChart3 />
        <LineChart3 />
      </div>   
      {/* <LineChart2 /> */}
       

    </Layout>
  )
}

export default App

