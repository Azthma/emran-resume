import { Row, Col, Card } from 'antd'
import {
    CodeOutlined,
    BugOutlined
} from '@ant-design/icons';
import './Common.css'
import './WhatIDo.css'

function WhatIDo() {
    return (
        <div>
            <Row justify='center' align='middle' className='margin-bottom-14'>
                <p className='title margin-bottom-5'>What I Do</p>
            </Row>
            <Row gutter={[32, 24]} justify='center' align='middle'>
                <Col sm={24} md={24} lg={6} xl={6} justify='center' align='middle' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='card-title'><CodeOutlined /> Web Development</p>} 
                        bordered={false}
                        className='card'
                    >
                        <p className='text'>
                            Develop websites and web application as a full stack developer. 
                            Ensures that the website and web application is visually appealing and user friendly.
                        </p>
                    </Card>
                </Col>
                <Col sm={24} md={24} lg={6} xl={6} justify='center' align='middle' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='card-title'><BugOutlined /> Unit Testing</p>} 
                        bordered={false}
                        className='card'
                    >
                        <p className='text'>
                            API testing and SQL testing for back-end testing and automated testing for 
                            the overall functionality of the web application for front-end testing.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default WhatIDo;