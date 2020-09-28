import React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { Typography } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import Introduction from './pages/Introduction';
import HTML1 from './pages/htmlPages/HTML1';
import HTML2 from './pages/htmlPages/HTML2';

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {

  const [page, setPage] = useState('HTML1');

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
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Title style={{color: '#fff',textAlign: 'center', paddingTop: '10px'}}>Web Development Tutorial by Chao</Title>
          <h1></h1>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', paddingTop: '0px' }}
              >
                <Menu.Item key="intro"  onClick={handlePage}>Introduction</Menu.Item>
                <SubMenu key="html" title="HTML">
                  <Menu.Item key="html1" onClick={handlePage}>option1</Menu.Item>
                  <Menu.Item key="html2" onClick={handlePage}>option2</Menu.Item>
                  <Menu.Item key="html3" onClick={handlePage}>option3</Menu.Item>
                  <Menu.Item key="html4" onClick={handlePage}>option4</Menu.Item>
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
            <Content style={{ minHeight: 400, backgroundColor: '#fff', marginLeft: '20px', padding: '20px' }}>
              <RenderPage />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Chao</Footer>
      </Layout>
    </div>
  );
}

export default App;
