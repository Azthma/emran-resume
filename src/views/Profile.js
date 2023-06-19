import { Row, Avatar, Col } from 'antd'
import {
    MailFilled,
    PhoneFilled,
    EnvironmentFilled,
    FacebookFilled,
    GithubOutlined,
} from '@ant-design/icons';
import './Profile.css'
const profile = require('../../src/assets/img/profile.jpg')

function Profile() {
    return (
        <div className='main'>
            <Row justify='center' align='middle' className='profile'>
                <Avatar 
                    src={profile} 
                    size={{ xs: 200, sm: 200, md: 200, lg: 300, xl: 300, xxl: 300 }}
                    className="image"
                />
                <p className='name margin-bottom-5'>Emran Pendaliday</p>
                <p className="profession margin-top-0 margin-bottom-24">Web Developer</p>
                <p className="contact-details"><MailFilled /> emranpendaliday1010@gmail.com</p>
                <p className="contact-details margin-top-0"><PhoneFilled /> +63 967 569 3694</p>
                <p className="contact-details margin-top-0"><EnvironmentFilled /> Caragasan, Zamboanga City, Philippines</p>
            </Row>
            <Row justify='center' align='middle' gutter={16} style={{marginTop: 24}}>
                <Col><a href="https://www.facebook.com/emran.pendaliday.12" target="_blank" rel="noopener noreferrer"><FacebookFilled className='icon' /></a></Col>
                <Col><a href="https://github.com/Azthma" target="_blank" rel="noopener noreferrer"><GithubOutlined className='icon' /></a></Col>
            </Row>
        </div>
    );
  }
  
  export default Profile;