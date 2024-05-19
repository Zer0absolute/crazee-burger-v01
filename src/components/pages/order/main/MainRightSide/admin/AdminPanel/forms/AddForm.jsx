import OrderContext from "../../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../../enums/product";
import { useContext } from "react";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../../utils/maths";
import Form from "../../../../../../../reusable-ui/Form";

export default function AddForm() {
    const { handleAdd, newProduct, setNewProduct, username } = useContext(OrderContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (event) => { 
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(), 
            price: replaceFrenchCommaWithDot(newProduct.price)
        }
        handleAdd(newProductToAdd, username)
        setNewProduct(EMPTY_PRODUCT)
        displaySuccessMessage()
    }

    const handleChange = (event) => { 
        setNewProduct({...newProduct, [event.target.name]:event.target.value})
    }
    
    return (
        <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
            <SubmitButton isSubmitted={isSubmitted} />
        </Form>
    )
}