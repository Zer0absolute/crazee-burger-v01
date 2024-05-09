import styled from "styled-components";
import { TextInput } from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import ImagePreview from './ImagePreview';
import { forwardRef } from "react";

const Form = forwardRef(({ product, onSubmit, onChange, children}, ref) => {
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
            <div className="form-footer">
                {children}
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

    .form-footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        margin-top: -6px;
    }
`;