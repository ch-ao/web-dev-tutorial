import React from 'react'
import { Typography } from 'antd';
import { Divider } from 'antd';
import { Image } from 'antd';
const { Text } = Typography;
const { Title } = Typography;

export default function Welcome() {
  return (
    <div className='welcomePage'>
      <Image src='https://media.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif' width='300px' />
      <Title level={3}>
        Hi, Welcome to My Web Dev Tutorial !
      </Title>
      <Title level={3}>
        My name is Chao. I am a Front End Software Engineer and a Programming Instructor. I would like to provide some useful knowledge to help you quickly get into web development in an easy way. 
      </Title>
      <Title level={3}>
        👈🏻 Let's start !
      </Title>
    </div>
  )
}
