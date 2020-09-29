import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { useState } from 'react';
import { Component } from 'react';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { Menu} from 'antd';
import { Image } from 'antd';
import Welcome from './pages/Welcome';
import Introduction from './pages/Introduction';
import HTML1 from './pages/htmlPages/HTML1';
import HTML2 from './pages/htmlPages/HTML2';
import HTML3 from './pages/htmlPages/HTML3';
import HTML4 from './pages/htmlPages/HTML4';
import CSS1 from './pages/cssPages/CSS1';
import CSS2 from './pages/cssPages/CSS2';
import CSS3 from './pages/cssPages/CSS3';
import CSS4 from './pages/cssPages/CSS4';
import JS1 from './pages/jsPages/JS1';
import JS2 from './pages/jsPages/JS2';
import JS3 from './pages/jsPages/JS3';
import JS4 from './pages/jsPages/JS4';
import MyjQuery from './pages/MyjQuery';
import { useMediaQuery } from 'react-responsive'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

function App() {

  const { Title } = Typography;
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [page, setPage] = useState('');

  const handlePage = (e) => {
    setPage(e.key);
  }

  const RenderPage = () => {
    switch(page) {
      case 'welcome': return <Welcome />;
      case 'intro': return <Introduction />;
      case 'html1': return <HTML1 />;
      case 'html2': return <HTML2 />;
      case 'html3': return <HTML3 />;
      case 'html4': return <HTML4 />;
      case 'css1': return <CSS1 />;
      case 'css2': return <CSS2/>;
      case 'css3': return <CSS3 />;
      case 'css4': return <CSS4 />;
      case 'js1': return <JS1 />;
      case 'js2': return <JS2/>;
      case 'js3': return <JS3 />;
      case 'js4': return <JS4 />;
      case 'jquery': return <MyjQuery />;
      default: return <Welcome />;
    }
  }

  return (
    <div>
      <Layout>  
        <Content>
          <Layout>
            <Sider 
            className="sider" 
            width={300}
            
            collapsed={ isTabletOrMobile ? true : false }
            >
              <Menu
                mode="inline"
                theme='dark'
                defaultSelectedKeys={['welcome']}
                defaultOpenKeys={['html', 'css', 'js', 'projects']}
                style={{ height: '100%'}}
              >
                <Menu.Item key="logo" disabled style={{fontSize: '1.2em', textTransform: 'uppercase', backgroundColor: 'black'}}>Web Dev Tutorial</Menu.Item>
                <Menu.Item key="welcome" onClick={handlePage} >Welcome</Menu.Item>
                <Menu.Item key="intro"  onClick={handlePage} >Introduction</Menu.Item>
                <SubMenu key="html" title="HTML Tutorial">
                  <Menu.Item key="html1" onClick={handlePage}>HTML Introduction</Menu.Item>
                  <Menu.Item key="html2" onClick={handlePage}>HTML Basics</Menu.Item>
                  <Menu.Item key="html3" onClick={handlePage}>HTML Intermediate</Menu.Item>
                  <Menu.Item key="html4" onClick={handlePage}>HTML Advanced</Menu.Item>
                </SubMenu>
                <SubMenu key="css" title="CSS Tutorial">
                  <Menu.Item key="css1" onClick={handlePage}>CSS Introduction</Menu.Item>
                  <Menu.Item key="css2" onClick={handlePage}>CSS Basics</Menu.Item>
                  <Menu.Item key="css3" onClick={handlePage}>CSS Intermediate</Menu.Item>
                  <Menu.Item key="css4" onClick={handlePage}>CSS Advanced</Menu.Item>
                </SubMenu>
                <SubMenu key="js" title="JavaScript Tutorial">
                  <Menu.Item key="js1" onClick={handlePage}>JS Introduction</Menu.Item>
                  <Menu.Item key="js2" onClick={handlePage}>JS Basics</Menu.Item>
                  <Menu.Item key="js3" onClick={handlePage}>JS Intermediate</Menu.Item>
                  <Menu.Item key="js4" onClick={handlePage}>JS Advanced</Menu.Item>
                </SubMenu>
                <Menu.Item key="jquery"  onClick={handlePage} >jQuery Tutorial</Menu.Item>
                <SubMenu key="projects" title="Integrated Projects">
                  <Menu.Item key="project1" onClick={handlePage}>BMI Calculator</Menu.Item>
                  <Menu.Item key="project2" onClick={handlePage}>Dice Game</Menu.Item>
                  <Menu.Item key="project3" onClick={handlePage}>Drum Kit</Menu.Item>
                  <Menu.Item key="project4" onClick={handlePage}>Speed Typer</Menu.Item>
                </SubMenu>
              </Menu>            
            </Sider>
            <Content style={{ minHeight: 400, backgroundColor: '#fff', padding: '1% 5%'}}>
              <RenderPage />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Web Development Teaching Tutorial ©2020 Created by <a href='https://chao.gg'>Chao</a> </Footer>
      </Layout>
    </div>
  );
}

export default App;
