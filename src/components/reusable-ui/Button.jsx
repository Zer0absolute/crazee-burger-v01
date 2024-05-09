import styled, { css } from "styled-components";
import {theme} from "../../theme/index.jsx";

export const Button = ({label, Icon, onClick, version, className}) => {
    return <ButtonStyled className={className} version={version} onClick={onClick}>
        <span>{label}</span>
        <div className='icon'>
            {Icon && Icon}
        </div>
    </ButtonStyled>
}

const ButtonStyled = styled.button`
    ${({ version }) => extraStyle[version]}
    border: transparent;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    cursor: pointer;
    font-family: ${theme.fonts.family.globalText};

    .icon {
        position: absolute;
        display: inline-flex;
        padding-left: 10px;
        margin-top: 2px;
    }

    &:hover {
        background: ${theme.colors.white};
        transition: background 0.3s ease;
    }

    &:focus {
        color: ${theme.colors.white};
    }
`;

const extraStyleNormal = css`
    width: 100%;
    height: 55px;
    background: ${theme.colors.primary};
    
    
    &:hover {
        span {
            color: ${theme.colors.primary};
        }
        border: 1px solid ${theme.colors.primary};
        
        &:active {
            background: ${theme.colors.primary};
            span {
                color: ${theme.colors.white};
            }
        }
    }
    

    &:focus {
        background: ${theme.colors.primary};
    }
`

const extraStyleSuccess = css`
    width: 50%;
    height: 35px;
    background: ${theme.colors.success};
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.XS};
    
    &:hover {
        span {
            color: ${theme.colors.success};
        }
        border: 1px solid ${theme.colors.success};

        &:active {
            background: ${theme.colors.success};
            span {
                color: ${theme.colors.white};
            }
        }
    }

    &:focus {
        background: ${theme.colors.success};
    }
`

const extraStyle = {
    normal: extraStyleNormal,
    success: extraStyleSuccess,
}