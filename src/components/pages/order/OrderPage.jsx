import styled from "styled-components";
import {theme} from "../../../theme/index.jsx";
import {Navbar} from "./Navbar/Navbar.jsx";
import {Main} from "./main/Main.jsx";
import { useEffect, useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx"
import { EMPTY_PRODUCT } from "../../../enums/product.js";
import { useMenu } from "../../../hooks/useMenu.jsx";
import { useBasket } from "../../../hooks/useBasket.jsx";
import { findObjectById } from "../../../utils/array.js";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product.js";

export const OrderPage = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [ productSelected, setProductSelected ] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu()
    const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()
    const { username } = useParams()

    const handleProductSelected = async (idProductClicked) => {
        const productClickOn = findObjectById(idProductClicked, menu)
        await setIsCollapsed(false)
        await setCurrentTabSelected("edit")
        await setProductSelected(productClickOn)
        titleEditRef.current.focus()
    }
    const initialiseMenu = async () => {
        const menuReceived = await getMenu(username)
        setMenu(menuReceived)
    }

    useEffect(() => {
        initialiseMenu()
    }, [])
    

    const orderContextValue = {
        username,
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
        basket,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected,
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