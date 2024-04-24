import styled from "styled-components";
import {theme} from "../../../theme/index.jsx";
import {Navbar} from "./Navbar/Navbar.jsx";
import {Main} from "./main/Main.jsx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx"
import { fakeMenu } from "../../../fakeData/fakeMenu.js";
import { EMPTY_PRODUCT } from "../../../enums/product.js";

export const OrderPage = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu.LARGE);
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [ productSelected, setProductSelected ] = useState(EMPTY_PRODUCT)

    const handleAdd = (newProduct) => { 
        const menuCopy = [...menu]
        const menuUpdate = [newProduct, ...menuCopy]
        setMenu(menuUpdate)
    }

    const handleDelete = (productId) => {
        const menuCopy = [...menu]
        const menuUpdated = menuCopy.filter((product) => product.id !== productId)
        setMenu(menuUpdated)
    }

    const resetMenu = () => {
        setMenu(fakeMenu.LARGE)
    }

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        menu,
        setMenu,
        handleDelete,
        resetMenu,
        handleAdd,
        newProduct,
        setNewProduct,
        productSelected,
        setProductSelected,
    }

    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar/>
                    <Main/>
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    )
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container {
        height: 95vh;
        width: 1400px;
    }
`