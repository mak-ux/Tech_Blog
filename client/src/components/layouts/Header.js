import React from 'react'
import styled from 'styled-components'
import myImage from '../../images/mak.jpg';


const Header = () => {
    return <MainContainer><h1>WELCOME TO MY BLOG</h1></MainContainer>;
    
};



export default Header;

//main container
const MainContainer =styled.header`
background-image: url(${myImage});
background-repeat: no-repeat;
background-size:cover;
background-position: center;
    height:30rem;
    
    
    h1{
        transform:translate(-50%,-50%);
        color:#fff;
        font-weight:900;
        position:absolute;
        top:25%;
        left:50%
    }
`;
