// eslint-disable-next-line react/prop-types
import styled from "styled-components";
import {theme} from "../../theme/index.jsx";

// eslint-disable-next-line react/prop-types
export const TextInput = ({Icon, onChange, ...extraProps }) => {
    return <TextInputStyled>
        <div className="icon">
            {Icon && Icon}
        </div>
        <input
            type={"text"}
            onChange={onChange}
            {...extraProps}
        />
    </TextInputStyled>
}

const TextInputStyled = styled.div`
    display: flex;
    width: 400px;
    
    .icon {
        position: absolute;
        margin: 20px 20px 0 20px;
        color: ${theme.colors.greySemiDark};
    }
    
    input {
        display: flex;
        height: 55px;
        width: 100%;
        background: ${theme.colors.white};
        padding-left: 50px;

        border-radius: ${theme.borderRadius.round};
        border: none;

        &::placeholder {
            color: ${theme.colors.greyMedium};
        }

        &:focus-visible {
            outline: none;
        }
    }
`
