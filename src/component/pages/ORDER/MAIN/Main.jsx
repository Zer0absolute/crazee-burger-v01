import {Navbar} from "../Navbar/Navbar.jsx";
import styled from "styled-components";
import {theme} from "../../../../theme/index.jsx";

export const Main = () => {
    return (
        <MainStyled>
        </MainStyled>
    )
}

const MainStyled = styled.main`
    background: ${theme.colors.background_white};
    height: calc(95vh - 10vh);
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};
    
    overflow: hidden;
`