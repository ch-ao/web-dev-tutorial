import React from 'react'
import { Typography } from 'antd';
import { Divider } from 'antd';
const { Text } = Typography;
const { Title } = Typography;
const { Link } = Typography;

export default function HTML1() {
  return (
    <div>
      <Title>HTML Tutorial</Title>    
      <Divider/>
      <Text>Reference Links:</Text>
      <Text>223: 
        <Link href="https://ant.design" target="_blank">
          W3C School HTML Tutorial
        </Link>
      </Text>
      <Text code>
     asdsadd
        </Text>
    </div>
  )
}
