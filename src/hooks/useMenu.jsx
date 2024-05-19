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

    const handleEdit = (productBeingEdited, username) => {
        const menuCopy = deepClone(menu)
        const indexOfProducToEdit = findIndexById(productBeingEdited.id, menuCopy)
        menuCopy[indexOfProducToEdit] = productBeingEdited
        setMenu(menuCopy)
        syncBothMenus(username, menuCopy)
    }

    const handleDelete = (productId, username) => {
        const menuCopy = deepClone(menu)
        const menuUpdated = removeObjectById(productId, menuCopy)
        setMenu(menuUpdated)
        syncBothMenus(username, menuUpdated)
    }

    const resetMenu = (username) => {
        setMenu(fakeMenu.LARGE)
        syncBothMenus(username, fakeMenu.LARGE)
    }

    return { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu }
}