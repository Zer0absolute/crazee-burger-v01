import styled from "styled-components";
import {theme} from "../../../../theme/index.jsx";
import {MainRightSide} from "./MainRightSide/MainRightSide.jsx";

export const Main = () => {
    return (
        <MainStyled>
            {/*<div className="basket">*/}
            {/*    basket*/}
            {/*</div>*/}
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
    display: grid;
    grid-template-columns: 1fr;
    /* This code will be use for Basket */
    //grid-template-columns: 25% 1fr; 
    
    //.basket {
    //    background: blue;
    //}
`