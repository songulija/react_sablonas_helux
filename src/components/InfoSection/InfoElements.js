import styled from "styled-components";

// depending on passed properties background, colors will be different
// we can access them and change style depending on them
export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    /* add padding for small screen */
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;
// info wrapper holds other elements. it'll be grid
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width:100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax()(auto, 1fr);
    align-items: center;
    /* if imgStart is true then first will be col2 else it will be col1 */
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`:`'col1 col2'`)};
    @media screen and (max-width: 768px){
        /* if imgStart is true then it will display col2 as new row and col1 as new row else col1 then col2
        i'm adding '' to add two seperate rows */
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'`:`'col1' 'col2'`)};
    }
`
// this div Colum1 in grid-area will be named col1
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

// this div Colum2 in grid-area will be named col2
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;
// depending if its lightText is true or false it will change color
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1.%;
    font-weight: 600;
    color: ${({lightText}) => (lightText? '#f7f8fa':'#010606')};
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;
// depending on darkText is false or true it'll  change colors
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606': '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;