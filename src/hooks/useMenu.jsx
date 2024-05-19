import { deepClone, removeObjectById, findIndexById } from "../utils/array";
import { fakeMenu } from "../fakeData/fakeMenu";
import { useState } from "react";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
    const [menu, setMenu] = useState();

    const handleAdd = (newProduct, username) => { 
        const menuCopy = deepClone(menu)
        const menuUpdate = [newProduct, ...menuCopy]
        setMenu(menuUpdate)
        syncBothMenus(username, menuUpdate)
    }

    const handleEdit = (productBeingEdited) => {
        const menuCopy = deepClone(menu)
        const indexOfProducToEdit = findIndexById(productBeingEdited.id, menuCopy)
        menuCopy[indexOfProducToEdit] = productBeingEdited
        setMenu(menuCopy)
    }

    const handleDelete = (productId) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = removeObjectById(productId, menuCopy)
        setMenu(menuUpdated)
    }

    const resetMenu = () => {
        setMenu(fakeMenu.LARGE)
    }

    return { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu }
}