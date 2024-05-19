import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {TextInput} from "../../reusable-ui/TextInput.jsx";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import {Button} from "../../reusable-ui/Button.jsx";
import {theme} from "../../../theme/index.jsx";
import { authenticateUser } from "../../../api/user.js";
import Welcome from "./Welcome.jsx";

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
            <Welcome />
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
    
    .form-container {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
`