import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { useState } from 'react';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { Menu} from 'antd';
// import { Image } from 'antd';
import { useMediaQuery } from 'react-responsive';
import Welcome from './pages/welcomePage/Welcome';
import Introduction from './pages/introductionPage/Introduction';
import HTMLtutorial from './pages/htmlPage/HTMLtutorial';
import CSStutorial from './pages/cssPage/CSStutorial';
import JStutorial from './pages/jsPage/JStutorial';

// import { createFromIconfontCN } from '@ant-design/icons';

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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

  const handlePage = (e : any) => {
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
      default: return <Welcome />;
    }
  }

  return (
    <div className="App">
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
                <Menu.Item key="welcome" onClick={handlePage} > Welcome</Menu.Item>
                <Menu.Item key="intro"  onClick={handlePage} >Introduction</Menu.Item>
                <Menu.Item key="htmlTutorial"  onClick={handlePage} >HTML Tutorial</Menu.Item>
                <Menu.Item key="cssTutorial"  onClick={handlePage} >CSS Tutorial</Menu.Item>
                <Menu.Item key="jsTutorial"  onClick={handlePage} >JavaScript Tutorial</Menu.Item>
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
