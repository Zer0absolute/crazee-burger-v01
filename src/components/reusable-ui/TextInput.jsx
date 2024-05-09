// eslint-disable-next-line react/prop-types
import styled, { css } from "styled-components";
import {theme} from "../../theme/index.jsx";
import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
export const TextInput = forwardRef(({Icon, onChange, version, ...extraProps }, ref) => {
    return <TextInputStyled version={version}>
        <div className="icon">
            {Icon && Icon}
        </div>
        <input
            type={"text"}
            onChange={onChange}
            ref={ref}
            {...extraProps}
        />
    </TextInputStyled>
})

TextInput.displayName = "TextInput";

const TextInputStyled = styled.div`
    ${({ version }) => extraStyle[version]}
    display: flex;

    .icon {
        position: absolute;
    }
    
    input {
        display: flex;
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        border: none;
        font-family: ${theme.fonts.family.globalText};

        &:focus-visible {
            outline: none;
        }
    }
`

const extraStyleNormal = css`
    height: 55px;
    width: 400px;
    
    .icon {
        color: ${theme.colors.greySemiDark};
        margin: 20px 20px 0 20px;
    }
    
    input {
        color: ${theme.colors.dark};
        background: ${theme.colors.white};
        height: 55px;
        padding-left: 50px;
        
        &::placeholder {
            color: ${theme.colors.greyMedium};
        }
    }
`

const extraStyleMinimalist = css`    
    .icon {
        height: 15px;
        width: 15px;
        margin: 10px 13px 10px 24px;
        color: ${theme.colors.greyBlue}
    }
    
    input {
        height: 35px;
        padding-left: 50px;
        background: ${theme.colors.background_white};

        &::placeholder {
            color: ${theme.colors.greyMedium};
        }
    }
`

const extraStyle = {
    normal: extraStyleNormal,
    minimalist: extraStyleMinimalist,
}
