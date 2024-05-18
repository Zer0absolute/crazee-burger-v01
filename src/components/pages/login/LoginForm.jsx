import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {TextInput} from "../../reusable-ui/TextInput.jsx";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import {Button} from "../../reusable-ui/Button.jsx";
import {theme} from "../../../theme/index.jsx";
import { authenticateUser } from "../../../api/user.js";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        authenticateUser(username)
        setUsername('')
        navigate(`order/${username}`)
    }

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    return <LoginFormStyled action={'submit'} onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr/>
                <h2>Connectez-vous</h2>
            </div>
            <div className="form-container">
                <TextInput
                    value={username}
                    onChange={handleChange}
                    Icon={<BsPersonCircle />}
                    placeholder='Entrez votre prénom'
                    version={"normal"}
                    required
                />
                <Button
                    label={'Accéder à mon espace'}
                    Icon={<IoIosArrowForward />}
                    version={"normal"}
                />
            </div>
        </LoginFormStyled>
}

const LoginFormStyled = styled.form`
    width: 400px;
    
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
    
    .form-container {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
`