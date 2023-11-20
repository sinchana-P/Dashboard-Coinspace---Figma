import { Card } from "antd"
import './News.css'

export const News = () => {
  return (
    <div className="news-container-main">
      <Card className="news-container">
        <h2>Crypto Newsfeed</h2>
        <div className='newsfeed-container'>
          <Card>
            <div className="newsfeed-div">
              <h4>Today 11:36</h4>
              <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
              <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>           
            </div>  
          </Card>
        </div>

        <div className='newsfeed-container'>
          <Card>
            <div className="newsfeed-div">
              <h4>Today 11:36</h4>
              <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
              <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>          
            </div>
          </Card>
        </div>

        <div className='newsfeed-container'>
          <Card>
            <div>
              <h4>Today 11:36</h4>
              <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
              <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>
            
            </div>  
          </Card>
        </div>
        
      </Card>
    </div>
  )
}

