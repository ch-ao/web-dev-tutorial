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
import HTMLtutorial from './pages/HTMLtutorial';
import CSStutorial from './pages/CSStutorial';
import JStutorial from './pages/JStutorial';
import MyjQuery from './pages/MyjQuery';
import { useMediaQuery } from 'react-responsive';
import HtmlIcon from './imgs/icons/html.png';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

function App() {


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [page, setPage] = useState('');

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const handlePage = (e) => {
    setPage(e.key);
    scrollToTop();
  }

  const RenderPage = () => {
    switch(page) {
      case 'welcome': return <Welcome />;
      case 'intro': return <Introduction />;
      case 'htmlTutorial': return <HTMLtutorial />;
      case 'cssTutorial': return <CSStutorial />;
      case 'jsTutorial': return <JStutorial />;
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
            style={{height: '100%', margin: '20px'}}
            >
              <Menu
                mode="inline"
                theme='dark'
                defaultSelectedKeys={['welcome']}
                defaultOpenKeys={['projects']}
                style={{ height: '100%'}}
              >
                <Menu.Item key="welcome" onClick={handlePage} icon={<IconFont type="icon-jquery" />}> Welcome</Menu.Item>
                <Menu.Item key="intro"  onClick={handlePage} >Introduction</Menu.Item>
                <Menu.Item key="htmlTutorial"  onClick={handlePage} >HTML Tutorial</Menu.Item>
                <Menu.Item key="cssTutorial"  onClick={handlePage} >CSS Tutorial</Menu.Item>
                <Menu.Item key="jsTutorial"  onClick={handlePage} icon={<IconFont type="icon-javascript" />}>JavaScript Tutorial</Menu.Item>
                <Menu.Item key="jquery"  onClick={handlePage} >jQuery Tutorial</Menu.Item>
                <SubMenu key="projects" title="Integrated Projects">
                  <Menu.Item key="project1" onClick={handlePage}>BMI Calculator</Menu.Item>
                  <Menu.Item key="project2" onClick={handlePage}>Dice Game</Menu.Item>
                  <Menu.Item key="project3" onClick={handlePage}>Drum Kit</Menu.Item>
                  <Menu.Item key="project4" onClick={handlePage}>Speed Typer</Menu.Item>
                </SubMenu>
              </Menu>            
            </Sider>
            <Content style={{ minHeight: 400, backgroundColor: '#fff', padding: '30px 40px', margin: '20px'}}>
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
