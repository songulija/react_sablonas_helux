import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

function Sidebar({toggle,isOpen}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='discover'>
                        Discorver
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='services'>
                        Services
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='signup'>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                {/* wrapper for btn */}
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap> 
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
