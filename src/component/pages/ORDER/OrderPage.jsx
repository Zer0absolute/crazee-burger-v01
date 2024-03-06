import styled from "styled-components";
import {theme} from "../../../theme/index.jsx";
import {Navbar} from "./Navbar/Navbar.jsx";
import {Main} from "./MAIN/Main.jsx";

export const OrderPage = () => {
    return <OrderPageStyled>
        <Main/>
    </OrderPageStyled>
}

const OrderPageStyled = styled.div`
    background: orange;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`