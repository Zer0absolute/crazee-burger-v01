import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage.jsx"

export default function EditForm() {
    const { 
        productSelected, 
        setProductSelected, 
        handleEdit, 
        titleEditRef
    } = useContext(OrderContext)

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
        <Form 
            product={productSelected} 
            onChange={handleChange} 
            ref={titleEditRef}
            QUELQUECHOSE={<EditInfoMessage />}
        />
        // <EditFormStyled>
        //     <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
        //     <div className="input-fields">
        //         {inputTexts.map((input) => <TextInput 
        //                 key={input.id}
        //                 onChange={handleChange}
        //                 ref={}
        //                 {...input}
        //             />
        //         )}
        //     </div>
        //     <div className="submit">
        //         <EditInfoMessage />
        //     </div>
        // </EditFormStyled>
    )
}
