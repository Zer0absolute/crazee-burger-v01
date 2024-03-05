import {useState} from "react";

export const LoginForm = () => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setInputValue('')
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
