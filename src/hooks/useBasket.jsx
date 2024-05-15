import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findObjectById, removeObjectById, findIndexById } from "../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket)
        const productFoundInBasket = findObjectById(productToAdd.id, basketCopy)

        // 1er cas : Le produit n'est pas dans le basket
        if(!productFoundInBasket) {
            createNewProductInBasket(productToAdd, basketCopy, setBasket)
            return
        }

        //2eme cas : le produit est déjà dans le basket
        incrementProductAlreadyInBasket(productToAdd, basketCopy)
    }

    const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = findIndexById(productToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
    }

    const createNewProductInBasket= (productToAdd, basketCopy, setBasket) => {
        const newBasketProduct = {
            ...productToAdd,
            quantity: 1,
        }
    
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
    }

    const handleDeleteBasketProduct = (idBasketProduct) => {
        const basketCopy = deepClone(basket)
        const basketUpdated = removeObjectById(idBasketProduct, basketCopy)
        setBasket(basketUpdated)
    }
    
    return { basket, handleAddToBasket, handleDeleteBasketProduct }
}

