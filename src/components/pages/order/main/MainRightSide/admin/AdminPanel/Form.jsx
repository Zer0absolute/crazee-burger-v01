import styled from "styled-components";
import { Button } from "../../../../../../reusable-ui/Button";
import { TextInput } from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import ImagePreview from './ImagePreview';
import { theme } from "../../../../../../../theme";
import { FiCheck } from "react-icons/fi";
import { forwardRef } from "react";

const Form = forwardRef(({ product, onSubmit, onChange, QUELQUECHOSE}, ref) => {
    const inputTexts = getInputTextsConfig(product)

    return (
        <FormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} />
            <div className="input-fields">
                {inputTexts.map((input) => <TextInput 
                    key={input.id}
                    onChange={onChange}
                    version={'minimalist'}
                    ref={ref && input.name === 'title' ? ref : null}
                    {...input}
                    />
                )}
            </div>
            <div className="submit">
                {QUELQUECHOSE}
            </div>
        </FormStyled>
    )
})

Form.displayName = "Form";

export default Form

const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    height: 100%;
    width: 70%;

    .input-fields { 
        grid-area: 1 / 2 / -4 / 3;
        display: grid;
        grid-row-gap: 8px;
    }

    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;

        .submit-button {
            width: 50%;
        }

        .submit-message {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;

            .icon {
                color: ${theme.colors.success};
                margin-left: 10px;
                width: 1em;
                height: 1em;
                border: 1px solid ${theme.colors.success};
                border-radius: 50%;
                vertical-align: middle;
            }
            .message {
                margin-left: 5px;
                font-size: ${theme.fonts.size.SM};
                color: ${theme.colors.success};
                font-family: ${theme.fonts.family.globalText};
            }
        }
    }
`;