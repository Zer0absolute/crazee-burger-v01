import styled from "styled-components";
import {Menu} from "./menu/Menu.jsx";
import Admin from "./admin/Admin.jsx";

export const MainRightSide = () => {
    return (
        <MainRightSideStyled>
            <Menu />
            <Admin />
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    overflow-y: scroll;
`