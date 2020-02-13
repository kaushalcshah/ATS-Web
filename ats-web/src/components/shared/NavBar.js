import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import image from '../shared/niyuj_logo.png'
import image1 from '../shared/niyuj.jpg';
import 'antd/dist/antd.css';
import Home from '../Home';
import Candidates from '../Candidates';
import Positions from '../Positions';
import Schedules from '../Schedules';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
const { Header, Sider, Content } = Layout;

class NavBar extends React.Component {
    siderWidth = "200px";
    collapsableWidth = "80px";
    state = {
        collapsed: false,
        showImage: image,
        imgCss: "img"
    };


    toggle = () => {
        let finalImage;
        let finalCss;
        if (this.state.showImage === image) {
            finalImage = image1;
            finalCss = "img1";
        }
        else {
            finalImage = image;
            finalCss = "img";
        }
        this.setState({
            collapsed: !this.state.collapsed,
            showImage: finalImage,
            imgCss: finalCss
        });
    };


    render() {
        const { match, location, history } = this.props;

        return (
            <Router>
                <div className="row" >
                    <Layout>
                        <div style={{ width: this.state.collapsed ? this.collapsableWidth : this.siderWidth, transition: "all 0.2s" }}>
                            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.toggle}
                                collapsible={true} width={this.siderWidth} collapsedWidth={this.collapsableWidth} style={{ height: "100vh", position: "fixed", left: 0 }}>
                                <div className="logo" >
                                    <img src={this.state.showImage} className={this.state.imgCss} />
                                </div>

                                <Menu theme="dark" mode="inline" selectedkeys={[]} selectable={false}>
                                    <Menu.Item key="1">
                                        <NavLink to="/" exact activeStyle={{ color: "yellow" }}>
                                            <Icon type="home" />
                                            <span>Home</span>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <NavLink to="/positions" exact activeStyle={{ color: "yellow" }}>
                                            <Icon type="idcard" />
                                            <span>Positions</span>
                                        </NavLink>
                                    </Menu.Item>

                                    <Menu.Item key="3">
                                        <NavLink to="/candidates" exact activeStyle={{ color: "yellow" }}>
                                            <Icon type="user" />
                                            <span>Candidates</span>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <NavLink to="/schedules" exact activeStyle={{ color: "yellow" }}>
                                            <Icon type="schedule" />
                                            <span>Schedules</span>
                                        </NavLink>
                                    </Menu.Item>

                                </Menu>
                            </Sider>
                        </div>
                        <div className="col-md-10">
                            <Layout>
                                <Content style={{ margin: "20px" }} >
                                    <Switch>
                                        <Route exact path="/">
                                            <Home />
                                        </Route>
                                        <Route path="/positions">
                                            <Positions />
                                        </Route>
                                        <Route path="/schedules">
                                            <Schedules />
                                        </Route>
                                        <Route path="/candidates">
                                            <Candidates />
                                        </Route>
                                    </Switch>
                                </Content>
                            </Layout>
                        </div>
                    </Layout>
                </div>
            </Router>
        );
    }
}
export default NavBar;
