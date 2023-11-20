import { Layout } from 'antd'
import './App.css'
import { SideMenu } from './components/SideMenu/SideMenu'
import { ContentSection } from './components/ContentSection/ContentSection'

function App() {

  return (
    <Layout className='layout-container'>
      <Layout>
        <SideMenu />
        <ContentSection />      
      </Layout>
    </Layout>
  )
}

export default App
