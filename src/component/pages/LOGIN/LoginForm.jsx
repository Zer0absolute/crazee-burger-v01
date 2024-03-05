import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        setInputValue('')
        navigate(`order/${inputValue}`)
    }
    const handleChange = (event) => {
      setInputValue(event.target.value)
    }

    return <form action={'submit'} onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br/>
            <h2>Connectez-vous</h2>
                <input type={"text"} value={inputValue} onChange={handleChange} placeholder={"Entrez votre prénom..."} required/>
                <button>
                    Accéder à votre espace
                </button>
        </form>
}
