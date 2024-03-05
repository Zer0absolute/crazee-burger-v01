import styled from "styled-components";
import {theme} from "../../theme/index.jsx";

export const Logo = ({ className }) => {
    return (
        <LogoStyled className={className}>
            <h1>crazee</h1>
            <img src="/images/F03-logo-burger-orange.png" alt="logo burger orange"/>
            <h1>burger</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        font-family: Amatic SC, cursive;
        color: ${theme.colors.primary};
    }
    
    img {
        width: 80px;
        height: 60px;
        object-fit: contain;
    }
`