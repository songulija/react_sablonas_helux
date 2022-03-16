import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    // only render. adding listener and passing function
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Helux</NavLogo>
                    {/* bars icon */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    {/* container for menu items */}
                    <NavMenu>
                        {/* nav link to about. about section will have id about */}
                        <NavItem>
                            <NavLinks
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='discover'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* this is div wrapping button */}
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
