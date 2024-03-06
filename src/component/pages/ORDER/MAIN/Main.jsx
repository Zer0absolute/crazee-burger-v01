import {Navbar} from "../Navbar/Navbar.jsx";
import styled from "styled-components";
import {theme} from "../../../../theme/index.jsx";

export const Main = () => {
    return (
        <MainStyled>
            <Navbar/>
        </MainStyled>
    )
}

const MainStyled = styled.main`
    background: ${theme.colors.background_white};
    height: 95vh;
    width: 1400px;
`