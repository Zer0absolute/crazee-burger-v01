import styled from "styled-components";
import {theme} from "../../../../theme/index.jsx";
import {Logo} from "../../../reusable-ui/Logo.jsx";
import {Profile} from "./Profile.jsx";
import {refreshPage} from "../../../../utils/windows.js";

export const Navbar = () => {
    return (
        <NavbarStyled className="navbar">
            <Logo onClick={() => refreshPage()}/>
            <Profile />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    background: ${theme.colors.white};
    border-radius: 15px 15px 0 0;
    padding-left: 20px;
    font-family: "Open Sans", sans-serif;
`