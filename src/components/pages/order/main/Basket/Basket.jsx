import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Total from "./Total";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";

export default function Basket() {
    const { basket } = useContext(OrderContext)
    const isBasketEmpty = basket.length === 0

    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(0)}/>
            {isBasketEmpty ? <EmptyBasket/> : <BasketProducts/>}            
            <Footer/>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
`;