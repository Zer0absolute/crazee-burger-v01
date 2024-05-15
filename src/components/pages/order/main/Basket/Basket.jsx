import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Total from "./Total";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";
import { theme } from "../../../../../theme";
import { isEmpty } from "../../../../../utils/array";

export default function Basket() {
    const { basket, isModeAdmin, handleDeleteBasketProduct } = useContext(OrderContext)
    const isBasketEmpty = isEmpty(basket)

    const sumToPay = basket.reduce((total, basketProduct) => {
        total += basketProduct.price * basketProduct.quantity
        return total 
    }, 0)

    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(sumToPay)}/>
            {isBasketEmpty ? <EmptyBasket/> : <BasketProducts basket={basket} isModeAdmin={isModeAdmin} handleDeleteBasketProduct={handleDeleteBasketProduct}/>}            
            <Footer/>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    height: 85vh;
    overflow-y: hidden; 

    .head {
        position: sticky;
        top: 0;
    }

    .footer {
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        position: sticky;
        bottom: 0;
    }
`;