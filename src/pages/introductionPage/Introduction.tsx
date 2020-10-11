import React from 'react'
import { Image } from 'antd';
import { Typography } from 'antd';
import { Divider } from 'antd';
import DNSImage1 from '../../imgs/introduction/Picture4.png';
import DNSImage2 from '../../imgs/introduction/Picture5.png';
import DNSImage3 from '../../imgs/introduction/Picture6.png';
import ThreeFiles1 from '../../imgs/introduction/Picture9.png';
import Image1 from '../../imgs/introduction/Picture10.png';
import Image2 from '../../imgs/introduction/Picture11.png';
import Image3 from '../../imgs/introduction/Picture12.png';
import Image4 from '../../imgs/introduction/Picture13.png';
import Image5 from '../../imgs/introduction/Picture14.png';
import Image6 from '../../imgs/introduction/Picture15.png';
import Image7 from '../../imgs/introduction/Picture16.png';

const { Title, Paragraph, Text } = Typography;

export default function Introduction() {
  return (
    <div>
  <Title>Introduction to Web Development</Title>
      <Divider />

      <Title level={2}>What is the Internet ?</Title>
      <Text>The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and file sharing.</Text>
         
      
      <Title level={2}>How does the Internet work ?</Title>
      <Text>Domain Name ---&gt; Domain Name System ---&gt; IP Address ---&gt; Server</Text>
      
      <div className='myrow'>
        <div className='mycol'>
          <Title level={4}>DNS - Domain Name System</Title>
          <Image
              width={300}
              src={DNSImage1}
              className='myImage'
            />
        </div>
        <div className='mycol'>
          <Title level={4}>Domain Name to IP address</Title>
            <Image
              width={300}
              src={DNSImage2}
              className='myImage'
            />
        </div>
        <div className='mycol'>
          <Title level={4}>Clint to Server</Title>
            <Image
              width={300}
              src={DNSImage3}
              className='myImage'
            />
        </div>
      </div>

      <Title level={2}>Code Files = HTML + CSS + JavaScript</Title>
      <div className='myrow' style={{justifyContent:'start'}}>
        <Image
          width={400}
          src={ThreeFiles1}
          className='myImage'
        />
      </div>

      <Title level={2}>Example:</Title>
      <div className='myrow'>
        <div className='mycol'>
          <Title level={4}>HTML</Title>
          <Image
              width={300}
              src={Image1}
              className='myImage'
            />
        </div>
        <div className='mycol'>
          <Title level={4}>CSS</Title>
            <Image
              width={300}
              src={Image2}
              className='myImage'
            />
        </div>
        <div className='mycol'>
          <Title level={4}>JavaScript</Title>
            <Image
              width={300}
              src={Image3}
              className='myImage'
            />
        </div>
      </div>

      <Title level={2}>Steup for Web Development</Title>
      <div className='myrow' style={{justifyContent:'start'}}>
        <div className='mycol'>
          <Title level={4}>VS Code</Title>
          <Image
              width={200}
              src={Image6}
              className='myImage'
            />
        </div>
        <div className='mycol'>
          <Title level={4}>Google Chrome</Title>
          <img src={Image5} width='200' alt=""/>
        </div>
      </div>

      <Title level={2}>Other Code Editors</Title>
      <div className='myrow' style={{justifyContent:'start'}}>
        <div className='mycol'>
          <Image
              width={800}
              src={Image7}
              className='myImage'
            />
        </div>
      </div>

      <div className='myrow' style={{justifyContent:'start'}}>
        <div className='mycol'>
          <Title level={2}>How to Get Help When You're Stuck</Title>
          <Text>Ask Google; Stack Overflow.; MDN Web Docs; W3c School </Text>
        </div>
      </div>
    </div>
  )
}
