import { useContext, useState } from "react";
import OrderContext from "../../../../../../../../context/OrderContext.jsx";
import EditInfoMessage from "../message/EditInfoMessage.jsx"
import SavingMessage from "../message/SavingMessage.jsx";
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage.jsx";
import Form from "../../../../../../../reusable-ui/Form.jsx";

export default function EditForm() {
    const { 
        username,
        productSelected, 
        setProductSelected, 
        handleEdit, 
        titleEditRef
    } = useContext(OrderContext)
    const [valueOnFocus, setValueOnFocus] = useState()
    const { isSubmitted : isSaved, displaySuccessMessage } = useSuccessMessage()

    const handleChange = (event) => {
        const { name, value } = event.target

        const productBeingUpdated = {
            ...productSelected,
            [name] : value,
        }

        setProductSelected(productBeingUpdated)
        handleEdit(productBeingUpdated, username)
    }

    const handleOnFocus = (event) => {
        const inputValueOnFocus = event.target.value
        setValueOnFocus(inputValueOnFocus)
    }

    const handleOnBlur = (event) => {
        const valueOnBlur = event.target.value
        if(valueOnFocus !== valueOnBlur) {
            displaySuccessMessage()
        }
    }

    return (
        <Form product={productSelected} onChange={handleChange} onFocus={handleOnFocus} onBlur={handleOnBlur} ref={titleEditRef}>
            {isSaved ? <SavingMessage />: <EditInfoMessage />}
        </Form>
    )
}
