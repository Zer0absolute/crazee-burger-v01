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
import { findToArray } from "../../../../../../utils/array.js";

export const Menu = () => {
    const { 
        menu, 
        isModeAdmin,
        handleDelete,
        resetMenu,
        productSelected,
        setProductSelected,
        setIsCollapsed,
        setCurrentTabSelected,
        titleEditRef,
        handleAddToBasket,
        handleDeleteBasketProduct
    } = useContext(OrderContext)

    const handleClick = async (idProductClicked) => {
        if(!isModeAdmin) return
        
        await setIsCollapsed(false)
        await setCurrentTabSelected("edit")
        const productClickOn = findToArray(idProductClicked, menu)
        await setProductSelected(productClickOn)
        titleEditRef.current.focus()
    }

    const handleCardDelete = (event, idProductToDelete) => {
        event.stopPropagation()
        handleDelete(idProductToDelete)
        handleDeleteBasketProduct(idProductToDelete)
        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
        titleEditRef.current && titleEditRef.current.focus()
    }

    const handleAddButton = (event, idProductToAdd) => {
        event.stopPropagation()
        const productToAdd = findToArray(idProductToAdd, menu)
        handleAddToBasket(productToAdd)
    }

    if(menu.length === 0) {
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
                        onClick={() => handleClick(id)}
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