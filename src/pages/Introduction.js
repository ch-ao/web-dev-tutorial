import React from 'react'
import { Image } from 'antd';
import { Row, Col } from 'antd';
import { Typography, Divider } from 'antd';
import CloudImage from '../imgs/introduction/Picture2.png'
import PipeImage from '../imgs/introduction/Picture3.png'
import DNSImage1 from '../imgs/introduction/Picture4.png'
import DNSImage2 from '../imgs/introduction/Picture5.png'
import DNSImage3 from '../imgs/introduction/Picture6.png'

const { Title, Paragraph, Text } = Typography;

export default function Introduction() {
  return (
    <div>

      <Title>Introduction to Web Development</Title>


          <Title level={2}>What is the Internet ?</Title>
          <Image
            width={300}
            src={CloudImage}
          />
      
          <Title level={2}>How does the Internet work ?</Title>
          <Image
              width={300}
              src={PipeImage}/>

      <Row className="text-center m-3">
        <Col span={8}>
          <Title level={2}>DNS - Domain Name System</Title>
          <Image
            width={400}
            src={DNSImage1}
          />
        </Col>
        <Col span={8}>
          <Title level={2}>Domain Name to IP address</Title>
          <Image
              width={400}
              src={DNSImage2}
            />
        </Col>
        <Col span={8}>
          <Title level={2}>Domain Name to IP address</Title>
          <Image
              width={400}
              src={DNSImage3}
            />
        </Col>
      </Row>
      <Divider />




    </div>
  )
}
