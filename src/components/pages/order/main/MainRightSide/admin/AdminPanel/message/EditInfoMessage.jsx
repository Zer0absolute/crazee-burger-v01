import styled from "styled-components";
import { theme } from "../../../../../../../../theme";

export default function EditInfoMessage() {
    return (
        <EditInfoMessageStyled>
                <span>Cliquer sur un produit du menu pour le modifier{" "}
                    <u>en temps réel</u>
                </span>
        </EditInfoMessageStyled>
    )
}

const EditInfoMessageStyled = styled.div`
    height: 35px;
    
    span {
        color: ${theme.colors.primary};
        font-family: ${theme.fonts.family.globalText};
        font-weight: ${theme.fonts.weights.regular};
        font-size: ${theme.fonts.size.SM};
    }
`;