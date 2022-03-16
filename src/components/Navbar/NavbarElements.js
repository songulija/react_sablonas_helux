import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


// thats how to write styled components. so it will be nav component
// and i will apply style to it in ``. setting height, background, postiiton and more
export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav? '#000': 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease
    }
`
// setting display flex to our navbarcontainer which holds navlinks and logo
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 10;
    max-width: 1100px;
`
// justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
// mobile icon i want to display only on mobile. so display none for  desktop
/* It starts on a new line, and takes up the whole width - display blox */
/* This transformation is characterized by a two-dimensional 
        vector. Its coordinates define how much the element moves in each direction. */
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
// display ul list elements horizontally. center them.
// on mobile screen dont display this list
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    /* when clicking or hover on one of links then border bottom will be green */
    &:active{
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    /* Collapses white space as for normal, but suppresses line
     breaks (text wrapping) within the source. */
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* on hover set animation, change background and color */
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;

    }
`