import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

// Styled components styling
const StyledHeader = styled.header`
    background-color: red;

`;
const Subhed = styled.h4`
    background-color: blue;
    color: #fff;
`; 



// Below is a class component
// keyword 'this' is required for class components

// class Header extends React.Component {
//     render() {
//         return (
//             <div className="Header">
//                 <h1>Hello, {this.props.name}</h1>
//                 <h4>{this.props.title}</h4>
//             </div>
//         );
//     }
// }

// Below is a functional component
// we must include props as an argument for functional compnents (don't need 'this')

function Header(props) {
    return (
        <StyledHeader>
            <h1>Hello, {props.name}</h1>
            <h4>{props.title}</h4>
            <Subhed>subhed</Subhed>
        </StyledHeader>
    );
}


export default Header;