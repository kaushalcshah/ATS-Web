import React, { Component } from 'react';
import { Layout, Menu, Icon, Collapse } from 'antd';
import image from '../shared/niyuj_logo.png'
import image1 from '../shared/niyuj.jpg';
import Home from '../Home/Home';
import Candidates from '../Candidates/Candidates';
import Positions from '../Positions/Positions';
import Schedules from '../Schedules/Schedules';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
const { Header, Sider, Content } = Layout;

class NavBar extends React.Component {
  
    state = {
        collapsed:"false"
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    
    render() {  
        return (
            <Router>
                <div className="row" >
                    <Layout>
                        <div className={this.state.collapsed ? "collapsableWidth" : "siderWidth"}>
                            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.toggle}
                                collapsible={true} className="sider">
                                <div className="logo" >
                                    <img src={this.state.collapsed ? image1:image} className={this.state.collapsed ? "img1":"img"} />
                                </div>

                                <Menu theme="dark" mode="inline" selectable={false}>
                                    <Menu.Item key="1">
                                        <NavLink exact to="/" >
                                            <Icon type="home" />
                                            <span>Home</span>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <NavLink exact to="/positions"  >
                                            <Icon type="idcard" />
                                            <span>Positions</span>
                                        </NavLink>
                                    </Menu.Item>

                                    <Menu.Item key="3">
                                        <NavLink exact to="/candidates">
                                            <Icon type="user" />
                                            <span>Candidates</span>
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <NavLink exact to="/schedules">
                                            <Icon type="schedule" />
                                            <span>Schedules</span>
                                        </NavLink>
                                    </Menu.Item>

                                </Menu>
                            </Sider>
                        </div>
                        <div className="col-md-10">
                            <Layout className="layout">
                                <Content className="content" >
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
