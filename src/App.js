import React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { Typography } from 'antd';
import { Layout, Menu} from 'antd';
import { Image } from 'antd';
import Logo from './imgs/introduction/Picture21.png'
import Introduction from './pages/Introduction';
import HTML1 from './pages/htmlPages/HTML1';
import HTML2 from './pages/htmlPages/HTML2';

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {

  const [page, setPage] = useState('');

  const handlePage = (e) => {
    setPage(e.key)
  }
  
  const RenderPage = () => {
    switch(page) {
      case 'intro':
        return <Introduction />;
        break;
      case 'html1':
        return <HTML1 />;
        break;
      case 'html2':
        return <HTML2 />;
        break;
      default:
        return <Introduction  />;
    }
  }

  return (
    <div>
      <Layout>
      
        <Menu mode="horizontal" 
          defaultSelectedKeys={['web']} 
          style={{textAlign: "center", padding: '0px', boxShadow: '0 0 18px -6px black'
        }}>
          <Menu.Item 
            key="web" 
            style={{margin: "0 50px", padding: '10px 40px'}}>
            WEB DEV
          </Menu.Item>
          <Menu.Item 
            key="python" 
            style={{margin: "0 50px", padding: '10px 40px'}}>
          PYTHON
          </Menu.Item>
          <Menu.Item 
            key="codemao" 
            style={{margin: "0 50px", padding: '10px 40px'}}>
            CODEMAO
          </Menu.Item>
        </Menu>
     
        <Content>
          <Layout>
            <Sider className="sider" width={300} >
              <Menu
                mode="inline"
                defaultSelectedKeys={['intro']}
                defaultOpenKeys={['html', 'css', 'js']}
                style={{ height: '100%', fontSize: '1.2em'}}
              >
                <Menu.Item key="intro"  onClick={handlePage} >Introduction</Menu.Item>
                <SubMenu key="html" title="HTML">
                  <Menu.Item key="html1" onClick={handlePage}>HTML Introduction</Menu.Item>
                  <Menu.Item key="html2" onClick={handlePage}>HTML Basics</Menu.Item>
                  <Menu.Item key="html3" onClick={handlePage}>HTML Elements</Menu.Item>
                  <Menu.Item key="html4" onClick={handlePage}>HTML Attributes</Menu.Item>
                  <Menu.Item key="html5" onClick={handlePage}>HTML Heading</Menu.Item>
                </SubMenu>
                <SubMenu key="css" title="CSS">
                  <Menu.Item key="css1" onClick={handlePage}>option5</Menu.Item>
                  <Menu.Item key="css2" onClick={handlePage}>option6</Menu.Item>
                  <Menu.Item key="css3" onClick={handlePage}>option7</Menu.Item>
                  <Menu.Item key="css4" onClick={handlePage}>option8</Menu.Item>
                </SubMenu>
                <SubMenu key="js" title="JavaScript">
                  <Menu.Item key="js1" onClick={handlePage}>option9</Menu.Item>
                  <Menu.Item key="js2" onClick={handlePage}>option10</Menu.Item>
                  <Menu.Item key="js3" onClick={handlePage}>option11</Menu.Item>
                  <Menu.Item key="js4" onClick={handlePage}>option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ minHeight: 400, backgroundColor: '#fff', padding: '3%'}}>
              <RenderPage />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Teaching Tutorial ©2020 Created by Chao</Footer>
      </Layout>
    </div>
  );
}

export default App;
