import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

export const OrderPage = () => {
    const { username } = useParams()
    return <OrderPageStyled>
        <div className="container">
            <div className="navbar">
                navbar
            </div>
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
        background: red;
        height: 95vh;
        width: 1400px;
        
        .navbar {
            height: 10vh;
            background: blue;
        }
    }
`