import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { Button } from "../../../../../reusable-ui/Button";

export default function EmptyMenuAdmin() {

    return (
        <EmptyMenuAdminStyled>
            <p className="title">Le menu est vide ?</p>
            <p>Cliquez ci-dessous pour le réinitialiser</p>
            <div className="button-reset">
                <Button
                    label={"Générer de nouveaux produits"}
                />
            </div>
        </EmptyMenuAdminStyled>
    )
}

const EmptyMenuAdminStyled = styled.div`
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
        margin-top: -20px;
        color: ${theme.colors.greyBlue};
    }

    .button-reset{
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            width: 225px;
        }
    }
`;