import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyMenuClient() {
    return (
        <EmptyMenuClientStyled>
            <p className="title">Victime de notre succès ! :D</p>
            <p>De nouvelles recettes sont en cours de préparation.</p>
            <p>À très vite !</p>
        </EmptyMenuClientStyled>
    )
}

const EmptyMenuClientStyled = styled.div`
    font-size: ${theme.fonts.size.P4};
    font-family: Amatic SC, cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        font-weight: ${theme.fonts.weights.bold};
    }

    p {
        margin-bottom: -20px;
        color: ${theme.colors.greyBlue};
    }
`;