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
          shape="circle"
          style={{ right: 24 }}
        />
        </div>   
      </Layout>
    </Layout>
  )
}

export default App
