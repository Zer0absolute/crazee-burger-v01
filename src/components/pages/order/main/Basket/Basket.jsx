import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";

export default function Basket() {
    return (
        <BasketStyled>
            <div className="total">
                <span className="text-total">Total</span>
                <span className="price">{formatPrice(0)}</span>
            </div>
            <div className="basket-body">
                <span className="empty-message">Votre commande est vide.</span>
            </div>
            <div className="footer">
                <span>Codé avec ❤️ et React.JS</span>
            </div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;

    .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${theme.colors.primary};
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        letter-spacing: 2px;
        height: 70px;
        background: ${theme.colors.background_dark};
        padding: 0 16px;
    }

    .basket-body {
        flex: 1;
        background: ${theme.colors.background_white};
        box-shadow: ${theme.shadows.basket};

        .empty-message {
            display: flex;
            height: calc(95vh - 10vh - 70px - 70px);
            text-align: center;
            flex: 1;
            justify-content: center;
            align-items: center;
            align-self: center;
            line-height: 2;
            font-family: ${theme.fonts.family.stylish};
            font-size: ${theme.fonts.size.P4};
            color: ${theme.colors.greyBlue};
        }
    }

    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        height: 70px;
        background: ${theme.colors.background_dark};
        padding: 0 16px;
        font-size: ${theme.fonts.size.P2};
        font-family: ${theme.fonts.family.stylish};
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.white};
        border-bottom-left-radius: ${theme.borderRadius.round};
    }
`;