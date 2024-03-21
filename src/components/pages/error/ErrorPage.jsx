import {Link} from "react-router-dom";
import {Button} from "../../reusable-ui/Button.jsx";
import styled from "styled-components";
import {theme} from "../../../theme/index.jsx";

export const ErrorPage = () => {
    return <ErrorPageStyled>
        <div className={"main"}>
            <div className={"title"}>
                <h1>4</h1>
                <img src="/images/F03-logo-burger-orange.png" alt="logo burger orange"/>
                <h1>4</h1>
            </div>
            <div className={"title-info"}>
                <h2>Oups! Quelque chose manque...</h2>
                <div className={"info-text"}>
                    <p>
                        Il semble que nous ne trouvions pas ce que vous cherchiez ...
                    </p>
                    <p>La page que vous recherchez n'existe pas, n'est pas disponible ou ne se chargeait pas
                        correctement.
                    </p>
                </div>
            </div>
            <br/>
            <Link to={'/'}>
                <Button label={"Retourner vers la page d'accueil"}/>
            </Link>
        </div>
    </ErrorPageStyled>
}

const ErrorPageStyled = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    background: ${theme.colors.background_white};
    display: flex;
    justify-content: center;
    
    .main {
        margin-top: -200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .title {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            h1 {
                font-family: Amatic SC, cursive;
                color: ${theme.colors.primary};
                font-size: 160px;
            }

            img {
                width: 160px;
                height: 120px;
                object-fit: contain;
            }
        }

        .title-info {
            display: flex;
            white-space: nowrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${theme.colors.greyBlue};
            font-size: 32px;
            font-family: ${theme.fonts.family.stylish};
            margin-top: -100px;

            .info-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: ${theme.colors.greyBlue};
                font-size: 28px;
            }
        }
    }
`