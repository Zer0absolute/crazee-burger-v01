import styled from "styled-components";
import {theme} from "../../../../theme/index.jsx";
import {MainRightSide} from "./MainRightSide/MainRightSide.jsx";
import Basket from "./Basket/Basket.jsx";

export const Main = () => {
    return (
        <MainStyled>
            <Basket/>
            <MainRightSide/>
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
    scrollbar-color: transparent transparent;
    display: grid;
    grid-template-columns: 25% 1fr;
`