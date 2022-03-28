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

// class Header extends React.Component {
//     render() {
//         return (
//             <div className="Header">
//                 <h1>Test Header</h1>
//             </div>
//         );
//     }
// }

// Below is a functional component

function Header() {
    return (
        <StyledHeader>
            <h1>Test Header</h1>
            <Subhed>subhed</Subhed>
        </StyledHeader>
    );
}


export default Header;