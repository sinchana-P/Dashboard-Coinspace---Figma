import React from 'react'
import { Content, Header } from 'antd/es/layout/layout'
import { HeaderComponent } from '../HeaderComponent/HeaderComponent'
import { TopSection } from '../TopSection/TopSection'
import { Chart } from '../Chart/Chart'
import { History } from '../History/History'
import { News } from '../News/News'
import './ContentSection.css'

export const ContentSection = () => {
  return (
    <Content className='content' >
      <HeaderComponent />
      <div>
        <TopSection />
        <div>
          <Chart />
          <div className='bottom-section-container'>
            <History />
            <News />
          </div>
        </div>
      </div>
    </Content>
  )
}


