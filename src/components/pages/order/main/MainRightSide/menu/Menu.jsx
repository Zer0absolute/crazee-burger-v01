import styled from "styled-components";
import {useContext} from "react";
import {theme} from "../../../../../../theme/index.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import { formatPrice } from "../../../../../../utils/maths.js";
import { Card } from "../../../../../reusable-ui/Card.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT } from "../../../../../../enums/product.js";
import { isEmpty } from "../../../../../../utils/array.js";
import Loader from "./Loader.jsx";

export const Menu = () => {
    const { 
        menu, 
        isModeAdmin,
        handleDelete,
        resetMenu,
        productSelected,
        setProductSelected,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected
    } = useContext(OrderContext)

    const handleCardDelete = (event, idProductToDelete) => {
        event.stopPropagation()
        handleDelete(idProductToDelete)
        handleDeleteBasketProduct(idProductToDelete)
        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
    }

    const handleAddButton = (event, idProductToAdd) => {
        event.stopPropagation()
        handleAddToBasket(idProductToAdd)
    }

    if(!menu) return <Loader />
    
    if(isEmpty(menu)) {
        if(!isModeAdmin) return <EmptyMenuClient />
        return isModeAdmin && <EmptyMenuAdmin onReset={() => resetMenu()}/>
    }

    return (
        <MenuStyled>
            {menu.map(({id, imageSource, title, price}) => {
                return (
                    <Card
                        key={id}
                        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                        title={title}
                        price={formatPrice(price)}
                        hasDeleteButton={isModeAdmin}
                        onDelete={(event) => handleCardDelete(event, id)}
                        onClick={isModeAdmin ? () => handleProductSelected(id) : null}
                        isHoverable={isModeAdmin}
                        isSelected={checkIfProductIsClicked(id, productSelected.id)}
                        onAdd={(event) => handleAddButton(event, id)}
                    />
                )
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    overflow-y: scroll;
    background: ${theme.colors.background_white};
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    grid-template-columns: repeat(3, 1fr);
    box-shadow: ${theme.shadows.strong};

    &:hover {
        overflow: auto;
        scrollbar-color: initial;
    }  
`