import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import UpdatePost from './UpdatePost/UpdatePost';
import Persons from './../container/Person/Person'
import ContactData from './ContactData/contactData'
import MyButton from './UI/Button/Button';
import ButtonAppBar from './UI/AppBar/AppBar';
import classes from  '../components/Blog';

class Blog extends Component {
    render () {
        return (
            <div>
                {/* <header>
                    <nav>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                </header> */}
                <ButtonAppBar>
                      <MyButton thisColor="secondary">
                <NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                class ={classes.myTextColor}
                        >Posts</NavLink>
                </MyButton>
                <MyButton>
                <NavLink to="/contactData"  exact
                                activeClassName="my-active">Contact</NavLink>

                </MyButton>
                <MyButton>
                <NavLink to="/person"  exact
                                activeClassName="my-active">Person</NavLink>

                </MyButton>
              
                <MyButton thisColor="inherit">
                <NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink>
                </MyButton>
                </ButtonAppBar>
              
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" exact component={Posts} />
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route path="/posts/update/:id" exact component={UpdatePost} />
                    <Route path="/contactData" exact component={ContactData} />
                    <Route path="/person" exact component={Persons} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;