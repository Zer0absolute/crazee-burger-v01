import { deepClone, getIndex } from "../utils/array";
import { fakeMenu } from "../fakeData/fakeMenu";
import { useState } from "react";

export const useMenu = () => {
    const [menu, setMenu] = useState(fakeMenu.LARGE);

    const handleAdd = (newProduct) => { 
        const menuCopy = deepClone(menu)
        const menuUpdate = [newProduct, ...menuCopy]
        setMenu(menuUpdate)
    }

    const handleEdit = (productBeingEdited) => {
        const menuCopy = deepClone(menu)
        const indexOfProducToEdit = getIndex(productBeingEdited.id, menuCopy)
        menuCopy[indexOfProducToEdit] = productBeingEdited
        setMenu(menuCopy)
    }

    const handleDelete = (productId) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = menuCopy.filter((product) => product.id !== productId)
        setMenu(menuUpdated)
    }

    const resetMenu = () => {
        setMenu(fakeMenu.LARGE)
    }

    return { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu }
}