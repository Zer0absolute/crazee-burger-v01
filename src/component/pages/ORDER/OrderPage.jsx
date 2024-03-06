import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../theme/index.jsx";
import {Navbar} from "./Navbar/Navbar.jsx";

export const OrderPage = () => {
    const { username } = useParams()
    return <OrderPageStyled>
        <div className="container">
            <Navbar />
            {/*<h1>Bonjour {username}</h1>*/}
            {/*<br/>*/}
            {/*<Link to={"/"}>*/}
            {/*    <button>Déconnexion</button>*/}
            {/*</Link>*/}
        </div>
    </OrderPageStyled>
}

const OrderPageStyled = styled.div`
    background: orange;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container {
        background: ${theme.colors.background_white};
        height: 95vh;
        width: 1400px;
    }
`