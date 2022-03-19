import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/rivita-logo.png'
import { animateScroll as scroll, scroller, Link } from 'react-scroll'
import '../styles/headerHomeStyle.css'

class HeaderHome extends React.Component {
    render() {
        // const naudotojas = JSON.parse(JSON.stringify(this.props.userInfoReducer.role));
        return (
            <div>
                <Navbar bg="" variant='dark' expand="xl"  >
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href="/">
                                <img style={{ width: '100px' }} src={logo} alt='Logo' />
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" style={{ fontWeight: '500', fontSize: '18px', color: 'white' }}>PAGRINDINIS</Nav.Link>
                                <LinkContainer to='' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>
                                    <Link className="nav-link" to="about" smooth={true} duration={400} offset={-40}>APIE MUS</Link>
                                </LinkContainer>

                                <LinkContainer to='' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>

                                    <Link className="nav-link" to="paslaugos" smooth={true} duration={500}>PASLAUGOS</Link>
                                </LinkContainer>
                                <LinkContainer to='/' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>

                                    <Link className="nav-link" to="kroviniai" smooth={true} duration={500}>KROVINIAI</Link>
                                </LinkContainer>
                                <LinkContainer to='/' style={{ color: 'white', fontWeight: '500', fontSize: '18px' }}>

                                    <Link className="nav-link" to="kontaktai" smooth={true} duration={500}>KONTAKTAI</Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

}

export default HeaderHome