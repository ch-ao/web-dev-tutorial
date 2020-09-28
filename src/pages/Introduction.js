import React from 'react'
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

export default function Introduction() {
  return (
    <div>
      <Title>Introduction to Web Development</Title>
      <Divider />
      <Title level={2}>What is the Internet ?</Title>
    
      <Paragraph>This tutorial website is to help you better understand the concepts of Web Development including HTML, CSS, JavaScript and jQuery</Paragraph>
    </div>
  )
}
