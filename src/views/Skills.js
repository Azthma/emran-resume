import { Row, Col, Card, Progress } from 'antd'
import './Common.css'
import './Skills.css'

function Skills() {
    return (
        <div className='secondary-background'>
            <Row gutter={[150, 24]} justify='center' align='start'>
                <Col sm={24} md={24} lg={8} xl={8} justify='start' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='skills-card-title'>Technical Skills</p>} 
                        bordered={false}
                        className='skills-card'
                    >
                        <Row>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>HTML</p></Col>
                                    <Col><p className='skill-name'>80%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={80} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>CSS</p></Col>
                                    <Col><p className='skill-name'>80%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={80} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>ReactJs</p></Col>
                                    <Col><p className='skill-name'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>VueJs</p></Col>
                                    <Col><p className='skill-name'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Bootstrap</p></Col>
                                    <Col><p className='skill-name'>70%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={70} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>NodeJs Express</p></Col>
                                    <Col><p className='skill-name'>95%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={95} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Mongoose</p></Col>
                                    <Col><p className='skill-name'>80%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={80} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Sequelize</p></Col>
                                    <Col><p className='skill-name'>80%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={80} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Git</p></Col>
                                    <Col><p className='skill-name'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Mocha and Chai</p></Col>
                                    <Col><p className='skill-name'>95%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={95} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Selenium</p></Col>
                                    <Col><p className='skill-name'>70%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={70} showInfo={false} trailColor={'white'} /></Col>
                        </Row>
                    </Card>
                </Col>
                <Col sm={24} md={24} lg={8} xl={8} justify='start' style={{ width: '90%' }}>
                    <Card 
                        title={<p className='skills-card-title'>Soft Skills</p>} 
                        bordered={false}
                        className='skills-card'
                    >
                        <Row>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Critical Thinking</p></Col>
                                    <Col><p className='skill-name'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Analytical</p></Col>
                                    <Col><p className='skill-name'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Problem Solving</p></Col>
                                    <Col><p className='skill-name'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Time Management</p></Col>
                                    <Col><p className='skill-name'>80%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={80} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Teamwork</p></Col>
                                    <Col><p className='skill-name'>70%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={70} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='skill-name'>Adaptability</p></Col>
                                    <Col><p className='skill-name'>70%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={70} showInfo={false} trailColor={'white'} /></Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Skills;