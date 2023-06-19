import { Row, Col, Card } from 'antd'
import { LaptopOutlined } from '@ant-design/icons';
import './Common.css'

function Experience() {
    return (
        <div className='secondary-background-1'>
            <Row justify='center' align='middle' className='margin-bottom-14'>
                <p className='title margin-bottom-5'><LaptopOutlined /> Work Experience</p>
            </Row>
            <Row gutter={[64, 24]} justify='center' align='middle'>
                <Col sm={24} md={24} lg={6} xl={6} justify='center' align='start' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='credential-title'>Web Developer</p>} 
                        bordered={false}
                        className='credential-card-1'
                    >
                        <p className='credential-year'>2022-CURRENT</p>
                        <p className='credential-address'>Ark Digital</p>
                    </Card>
                </Col>
                <Col sm={24} md={24} lg={6} xl={6} justify='center' align='start' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='credential-title'>Quality Assurance</p>} 
                        bordered={false}
                        className='credential-card-1'
                    >
                        <p className='credential-year'>2021-2022</p>
                        <p className='credential-address'>South GG Promotions</p>
                    </Card>
                </Col>
                <Col sm={24} md={24} lg={6} xl={6} justify='center' align='start' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='credential-title'>Web Developer - OJT</p>} 
                        bordered={false}
                        className='credential-card-1'
                    >
                        <p className='credential-year'>486 HOURS</p>
                        <p className='credential-address'>Digilair Outsourcing Services</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Experience;