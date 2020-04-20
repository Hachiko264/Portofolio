import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import CV from "../cv/CV";

function Layout() {
    return (
        <Router>
			<Navbar variant="dark" expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand href="/">
				      <img
				        alt=""
				        src={require('./images/logo-white.svg')}
				        height="100px"
				        className="navbar-brand"
				      />{' '}
				    </Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink to="/" exact className="nav-link">
							Home
						</NavLink>
						<NavLink to="/about" className="nav-link">
							About
						</NavLink>
						<NavLink to="/cv" className="nav-link">
							CV
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/cv" component={CV} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Container>
			<> 
	    		<footer className='footer mt-auto py-1 pb-4 '>
	      			<div className='container'>2020 &copy; Martha H. Rosenlund</div>
	    		</footer>
	    	</>
		</Router>

    );
}

export default Layout;
