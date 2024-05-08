import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import { useContext, useState } from "react";
import Form from "./Form";

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
    
    return (
        <Form 
            product={newProduct} 
            onSubmit={handleSubmit} 
            onChange={handleChange} 
            isSubmitted={isSubmitted}
        />
    )
}