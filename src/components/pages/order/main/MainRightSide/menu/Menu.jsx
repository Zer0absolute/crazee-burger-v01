import styled from "styled-components";
import {useContext} from "react";
import {theme} from "../../../../../../theme/index.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import { formatPrice } from "../../../../../../utils/maths.js";
import { Card } from "../../../../../reusable-ui/Card.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export const Menu = () => {
    const { 
        menu, 
        isModeAdmin,
        handleDelete,
        resetMenu,
        productSelected,
        setProductSelected,
    } = useContext(OrderContext)

    const handleClick = (idProductClicked) => {
        if(!isModeAdmin) return
        const productClickOn = menu.find((product) => product.id === idProductClicked)
        setProductSelected(productClickOn)
    }

    const handleCardDelete = (event, idProductToDelete) => {
        event.stopPropagation()
        handleDelete(idProductToDelete)
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    box-shadow: ${theme.shadows.strong};
`