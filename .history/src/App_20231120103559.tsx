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
        <>
        <FloatButton
            icon={<FileTextOutlined />}
            description="HELP INFO"
            shape="square"
            style={{ right: 24 }}
          />
        </>   
      </Layout>
    </Layout>
  )
}

export default App
