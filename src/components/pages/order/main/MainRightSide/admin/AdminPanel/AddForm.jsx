import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { Button } from "../../../../../../reusable-ui/Button";
import { TextInput } from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import { useState } from "react";
import ImagePreview from './ImagePreview';

const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0
}

export default function AddForm() {
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

    const handleChange = (event) => { 
        setNewProduct({...newProduct, [event.target.name]:event.target.value})
    }
    
    const inputTexts = getInputTextsConfig(newProduct)
    
    return (
        <AddFormStyled>
            <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
            <div className="input-fields">
                {inputTexts.map((input) => <TextInput 
                    key={input.id}
                    onChange={handleChange}
                    {...input}
                    />
                )}
            </div>
            <div className="succes-button">
                <Button
                    label={"Ajouter un nouveau produit au menu"}
                    version={"success"}
                />
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
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

    .succes-button { 
        grid-area: 4 / -2 / -1 / -1;
    }
`;