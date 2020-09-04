import React from 'react';
import logo from './logo.svg';
import classes from'./App.module.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className={classes.landingPageHeader} title="MY PORTFOLIO" style={{color: '#fff', fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px'}} scroll>
            <Navigation> 
                <Link  to="/resume"><p className={classes.links}>Resume</p></Link>
                <Link  to="/About"><p className={classes.links}>About Me</p></Link>
                <Link  to="/projects"><p className={classes.links}>Projects</p></Link>
                <Link  to="/Contact"><p className={classes.links}>Contact</p></Link>
              
            </Navigation>
        </Header>
        <Drawer className="landingPageHeader" title="MY PORTFOLIO">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/About">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
