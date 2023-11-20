import { Layout } from 'antd'
import './App.css'
import { SideMenu } from './components/SideMenu/SideMenu'
import { ContentSection } from './components/ContentSection/ContentSection'
import { FileTextOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

function App() {

  return (
    <Layout className='layout-container'>
      <Layout>
        <SideMenu />
        <ContentSection />   
        <div>
        <FloatButton
          icon={<FileTextOutlined />}
          // description="HELP INFO"
          shape="square"
          style={{ right: 16 }}
        />

        {/* <FloatButton
          href="https://ant.design/index-cn"
          tooltip={<div>custom badge color</div>}
          badge={{ count: 5, color: 'blue' }}
        /> */}
        </div>   
      </Layout>
    </Layout>
  )
}

export default App
