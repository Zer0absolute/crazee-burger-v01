import styled from "styled-components";
import {theme} from "../../../theme/index.jsx";
import {Navbar} from "./Navbar/Navbar.jsx";
import {Main} from "./main/Main.jsx";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx"
import { EMPTY_PRODUCT } from "../../../enums/product.js";
import { useMenu } from "../../../hooks/useMenu.jsx";

export const OrderPage = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [ productSelected, setProductSelected ] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu()

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
        handleEdit,
        titleEditRef,
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