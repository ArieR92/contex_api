import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Navbar = () => {
    return (
        <ContenedorHeader>
            <Titulo>Menu</Titulo>
            <Menu>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </Menu> 
        </ContenedorHeader>
    );
}

export default Navbar;



const ContenedorHeader = styled.header`
text-align: center;
margin-botton: 40px;

`;

const Titulo = styled.h1`
margin-bottom: 10px;
font-size: 26px;
text-transform: uppercase;
`;


const Menu = styled.ul`
a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
}

a:hover {
   color: #191668;
}

a.active {
    border-bottom 2px solid #165168;
    padding-bottom: 3px;

}
`;