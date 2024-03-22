import styled from "styled-components";
import {theme} from "../../../theme/index.jsx";
import {Navbar} from "./Navbar/Navbar.jsx";
import {Main} from "./main/Main.jsx";

export const OrderPage = () => {
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar/>
                <Main/>
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container {
        height: 95vh;
        width: 1400px;
    }
`