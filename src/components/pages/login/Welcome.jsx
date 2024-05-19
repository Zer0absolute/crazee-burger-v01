import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
    return (
        <WelcomeStyled>
            <h1>Bienvenue chez nous !</h1>
            <hr/>
            <h2>Connectez-vous</h2>
        </WelcomeStyled>
    )
}
const WelcomeStyled = styled.div`
    h1, h2 {
        font-family: Amatic SC, cursive;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.white};
    }
    
    h1 {
        margin: 30px 0 30px 0;
        font-size: ${theme.fonts.size.P5};
    }
    
    hr {
        border: 1px solid ${theme.colors.loginLine};
    }
    
    h2 {
        margin-top: 40px;
        font-size: ${theme.fonts.size.P4};
    }
`;