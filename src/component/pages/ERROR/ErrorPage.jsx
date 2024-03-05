import {Link} from "react-router-dom";

export const ErrorPage = () => {
    return <div>
        <h1>ErrorPage</h1>
        <br/>
        <Link to={'/'}>
            <button>Retourner vers la page d'accueil</button>
        </Link>
    </div>
}
