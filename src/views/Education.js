import { Row, Col, Card } from 'antd'
import { BankFilled } from '@ant-design/icons';
import './Common.css'

function Education() {
    return (
        <div>
            <Row justify='center' align='middle' className='margin-bottom-14'>
                <p className='title margin-bottom-5'><BankFilled /> Education</p>
            </Row>
            <Row gutter={[32, 24]} justify='center' align='middle'>
                <Col sm={24} md={24} lg={6} xl={6} justify='center' align='start' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='credential-title'>Bachelor of Science in Information Technology</p>} 
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
  
  export default Education;