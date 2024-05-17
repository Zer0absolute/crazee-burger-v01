import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { calculateSumToPay } from "./helpers";

export default function Total() {
    const { basket, menu } = useContext(OrderContext)
    const sumToPay = calculateSumToPay(basket, menu)

    return (
        <Header>
            <TotalStyled>
                <span>Total</span>
                <span>{formatPrice(sumToPay)}</span>
            </TotalStyled>
        </Header>
    )
}

const TotalStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
`;