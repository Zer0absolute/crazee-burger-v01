import styled from "styled-components";
import {theme} from "../../theme/index.jsx";

export const Button = ({label, Icon}) => {
    return <ButtonStyled>
        <span>{label}</span>
        <div className='icon'>
            {Icon && Icon}
        </div>
    </ButtonStyled>
}

const ButtonStyled = styled.button`
    height: 55px;
    border: transparent;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    cursor: pointer;
    background: ${theme.colors.primary};

    .icon {
        position: absolute;
        display: inline-flex;
        padding-left: 10px;
        margin-top: 2px;
    }

    &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.primary};
        transition: background 0.4s ease;
        border: 1px solid ${theme.colors.primary};
    }

    &:focus {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }
`;