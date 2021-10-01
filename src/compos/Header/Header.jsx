import React from 'react';
import './Header.css';
import Logo from '../../logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contact from '../Contact/Contact.jsx';
import Home from '../Home/Home.jsx';
import Blog from '../Blog/Blog.jsx';
import BlogSingle from '../Blog/BlogSingle.jsx';

const Header = () => {
    return (
        <header>
            <BrowserRouter>
                <Navbar collapseOnSelect expand='lg' bg='light'>
                    <Container>
                        <Link to='/' className='navbar-brand'>
                            <img src={Logo} alt='Site Logo' />
                        </Link>
                        <Navbar.Toggle aria-controls='site-header-navigation' />
                        <Navbar.Collapse id='site-header-navigation'>
                            <Nav className='ms-auto'>
                                <Link to='/' className='nav-link'>
                                    Home
                                </Link>
                                <Link to='/blog' className='nav-link'>
                                    Blog
                                </Link>
                                <Link to='/contact' className='nav-link'>
                                    Contact
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/blog'>
                        <Blog />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/blogsingle/:postID'>
                        <BlogSingle />
                    </Route>
                </Switch>
            </BrowserRouter>
        </header>
    );
};

export default Header;
