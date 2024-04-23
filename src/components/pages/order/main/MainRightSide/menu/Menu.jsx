import styled from "styled-components";
import {useContext} from "react";
import {theme} from "../../../../../../theme/index.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import { fakeMenu } from "../../../../../../fakeData/fakeMenu.js";
import { formatPrice } from "../../../../../../utils/maths.js";
import { Card } from "../../../../../reusable-ui/Card.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export const Menu = () => {
    const { 
        menu, 
        setMenu, 
        isModeAdmin,
    } = useContext(OrderContext)

    const handleDelete = (productId) => {
        const menuCopy = [...menu]
        const menuUpdated = menuCopy.filter((product) => product.id !== productId)
        setMenu(menuUpdated)
    }

    const resetMenu = () => {
        setMenu(fakeMenu.LARGE)
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
                        onDelete={() => handleDelete(id)}
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