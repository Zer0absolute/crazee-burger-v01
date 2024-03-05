import {LoginForm} from "./LoginForm.jsx";
import styled from "styled-components";
import {Logo} from "../../reusable-ui/Logo.jsx";

export const LoginPage = () => {
    return <LoginPageStyled>
        <Logo className={"logo"}/>
        <LoginForm/>
    </LoginPageStyled>
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/F03-burger-background.jpg");
    background-size: cover;
    background-position: center;
    
    .logo {
        transform: scale(3.5);
        margin-bottom: 70px;
    }
`