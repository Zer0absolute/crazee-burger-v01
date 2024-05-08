import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import { TextInput } from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
    const { 
        productSelected, 
        setProductSelected, 
        handleEdit, 
        titleEditRef
    } = useContext(OrderContext)
    const inputTexts = getInputTextsConfig(productSelected)


    const handleChange = (event) => {
        const { name, value } = event.target

        const productBeingUpdated = {
            ...productSelected,
            [name] : value,
        }

        setProductSelected(productBeingUpdated)
        handleEdit(productBeingUpdated)
    }

    return (
        <EditFormStyled>
            <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
            <div className="input-fields">
                {inputTexts.map((input) => <TextInput 
                        key={input.id}
                        onChange={handleChange}
                        ref={input.name === 'title' ? titleEditRef : null}
                        {...input}
                    />
                )}
            </div>
            <div className="submit">
                <EditInfoMessage />
            </div>
        </EditFormStyled>
    )
}

const EditFormStyled = styled.form`
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
    }
`;