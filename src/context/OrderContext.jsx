import { createContext } from "react";

export default createContext({
    username: "",
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},
    
    menu: [],
    setMenu: () => {},
    resetMenu: () => {},

    handleDelete: () => {},
    handleAdd: () => {},
    handleEdit: () => {},

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},
    handleProductSelected: () => {},

    titleEditRef: {},

    basket: [],
    setBasket: () => {},
    handleAddToBasket: () => {},
    handleDeleteBasketProduct: () => {},
})