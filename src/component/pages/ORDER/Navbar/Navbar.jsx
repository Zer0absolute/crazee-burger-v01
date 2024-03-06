import styled from "styled-components";
import {theme} from "../../../../theme/index.jsx";

export const Navbar = () => {
    return (
        <NavbarStyled className="navbar">
            navbar
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    display: flex;
    height: 10vh;
    background: ${theme.colors.white};
    border-radius: 15px 15px 0 0;
`