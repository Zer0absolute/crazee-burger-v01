import styled from "styled-components";
import { Button } from "../../../../../../reusable-ui/Button";
import { TextInput } from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import { useContext, useState } from "react";
import ImagePreview from './ImagePreview';
import OrderContext from "../../../../../../../context/OrderContext";
import { theme } from "../../../../../../../theme";
import { FiCheck } from "react-icons/fi";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";

export default function AddForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)

    const handleSubmit = (event) => { 
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(), 
        }
        handleAdd(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        displaySuccessMessage()
    }

    const displaySuccessMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2500)
    }

    const handleChange = (event) => { 
        setNewProduct({...newProduct, [event.target.name]:event.target.value})
    }
    
    const inputTexts = getInputTextsConfig(newProduct)
    
    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
            <div className="input-fields">
                {inputTexts.map((input) => <TextInput 
                    key={input.id}
                    onChange={handleChange}
                    {...input}
                    />
                )}
            </div>
            <div className="submit">
                <Button
                    className="submit-button"
                    label={"Ajouter un nouveau produit au menu"}
                    version="success"
                />
                {isSubmitted && (
                <div className="submit-message">
                    <FiCheck className="icon" />
                    <span className="message">Ajouté avec succès !</span>
                </div>
                )}
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