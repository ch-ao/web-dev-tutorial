import React from 'react'
import { Typography } from 'antd';
import { Divider } from 'antd';
import { Space } from 'antd';

const { Text } = Typography;
const { Title } = Typography;
const { Link } = Typography;

export default function HTMLtutorial() {

  return (
    <div>
      <Title>HTML Tutorial</Title>    
      <Divider/>
      
      <Space direction="vertical" className='section'> 
        <Title level={2}>
          Concept and Syntax
        </Title>
        <Text>
        An HTML document is a plaintext document structured with elements. Elements are surrounded by matching opening and closing tags. Each tag begins and ends with angle brackets. There are a few empty or void tags that cannot enclose any text, for instance img.
        </Text>
        <Text>
          An HTML file is normally saved with an .htm or .html extension, served by a web server, and can be rendered by any Web browser.
        </Text>
      </Space>

      <Space direction="vertical" className='section'> 
        <Title level={2}>Recommended online tutorial links:</Title>
        <Link href="https://www.w3schools.com/html/default.asp" target="_blank">
          W3C School HTML Tutorial
        </Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" target="_blank">
          MDN web docs - HTML Tutorial
        </Link>
      </Space>

    </div>
  )
}