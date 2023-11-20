import { Card } from "antd"
import './News.css'

export const News = () => {
  return (
    <div>
      <Card className="news-container">
        <h1>Crypto Newsfeed</h1>
        <Card className='newsfeed-container'>
          <h4>Today 11:36</h4>
          <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
          <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>
        </Card>
        <Card className='newsfeed-container'>
          <h4>Today 11:36</h4>
          <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
          <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>
        </Card>
        <Card className='newsfeed-container'>
          <h4>Today 11:36</h4>
          <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
          <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>
        </Card>
      
    </Card>
    </div>
  )
}

