import styled from "styled-components";
import { Menu } from "./menu/Menu.jsx";
import Admin from "./admin/Admin.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { adminAnimation } from "../../../../../theme/animation.js";

export const MainRightSide = () => {
    const {isModeAdmin} = useContext(OrderContext)
    return (
        <MainRightSideStyled>
            <Menu />
            {isModeAdmin && <Admin />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    display: grid;
    position: relative;
    overflow-y: hidden; 
`