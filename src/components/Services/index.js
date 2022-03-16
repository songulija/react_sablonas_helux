import React from 'react'
import {ServicesContainer,ServicesH1,ServicesWrapper, ServicesCard, ServicesIcon,
     ServicesH2,ServicesP} from './ServicesElements';
import logo from '../../images/wallet.svg';
import Icon2 from '../../images/virtual-assistant.svg'
import Icon3 from '../../images/personal_finance.svg';

function Services() {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={logo}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase you overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>Unlock our special membership</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
