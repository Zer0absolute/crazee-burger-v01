import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import BasketBody from "./BasketBody";
import Footer from "./Footer";

export default function Basket() {
    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(0)}/>
            <BasketBody/>
            <Footer/>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
`;