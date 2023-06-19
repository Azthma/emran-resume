import { Row, Col, Card } from 'antd'
import { IdcardFilled } from '@ant-design/icons';
import './Common.css'

function Certificate() {
    return (
        <div>
            <Row justify='center' align='middle' className='margin-bottom-14'>
                <p className='title margin-bottom-5'><IdcardFilled /> Certificate</p>
            </Row>
            <Row gutter={[32, 24]} justify='center' align='middle'>
                <Col sm={24} md={24} lg={6} xl={6} justify='center' align='start' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='credential-title'>Devfest Zamboanga Peninsula 2018: Machine Learning, Android, Cyber Security, Flutter, Google Cloud, Python and Emerging Tools</p>} 
                        bordered={false}
                        className='credential-card'
                    >
                        <p className='credential-year'>2016-2020</p>
                        <p className='credential-address'>Western Mindanao State University, Philippines</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Certificate;