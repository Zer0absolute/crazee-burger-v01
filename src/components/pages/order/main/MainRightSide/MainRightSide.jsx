import styled from "styled-components";
import {Menu} from "./menu/Menu.jsx";

export const MainRightSide = () => {
    return (
        <MainRightSideStyled>
            <Menu />
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    overflow-y: scroll;
`