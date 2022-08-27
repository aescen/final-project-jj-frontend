import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { default as Menu } from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// React Router
import { useNavigate } from "react-router";

// External CSS
import "./nav.css";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Menu collapseOnSelect expand="lg" bg="dark" variant="dark" className='min-vw-100'>
			<Container>
				<Menu.Brand className="nav-brand" onClick={() => navigate("/")}>
					Bangunin
				</Menu.Brand>
				<Menu.Toggle aria-controls="responsive-navbar-nav" />
				<Menu.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{/* <Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
					<Nav>
						<Nav.Link onClick={() => navigate("categories")} className="mx-3 nav-link">
							Buy
						</Nav.Link>
						{/* <Nav.Link href="#deets">
							<Link to="register">Sell</Link>
						</Nav.Link> */}
						<Nav.Link onClick={() => navigate("login")} className="mx-3 nav-link">
							Login
						</Nav.Link>
					</Nav>
				</Menu.Collapse>
			</Container>
		</Menu>
	);
};

export default Navbar;
