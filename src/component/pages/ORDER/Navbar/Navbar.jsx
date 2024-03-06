import styled from "styled-components";
import {theme} from "../../../../theme/index.jsx";
import {Logo} from "../../../reusable-ui/Logo.jsx";

export const Navbar = () => {
    return (
        <NavbarStyled className="navbar">
            <Logo />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    display: flex;
    height: 10vh;
    background: ${theme.colors.white};
    border-radius: 15px 15px 0 0;
    padding-left: 20px;
`