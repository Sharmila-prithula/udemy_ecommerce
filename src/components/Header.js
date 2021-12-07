import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <SearchBox /> */}
            <Nav className="ml-auto ">
              <Nav.Link href="/#/cart">
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>

              {userInfo ? (
                <NavDropdown title={userInfo.username} id="username">
                  <NavDropdown.Item href="/#/profile">Profile</NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/#/login">
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenue">
                  <NavDropdown.Item href="/#/admin/userlist">
                    Users
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/#/admin/productlist">
                    Products
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/#/admin/orderlist">
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header
