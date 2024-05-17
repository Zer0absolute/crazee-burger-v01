import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findObjectById, removeObjectById, findIndexById } from "../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (idProductToAdd) => {
        const basketCopy = deepClone(basket)
        const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)
        if(productAlreadyInBasket) {
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
            return
        }

        createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
    }


    const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
        // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
        const newBasketProduct = {
            id: idProductToAdd,
            quantity: 1,
        }
        const newBasket = [newBasketProduct, ...basketCopy]
        setBasket(newBasket)
    }
    
    const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = findIndexById(idProductToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
    }

    const handleDeleteBasketProduct = (idBasketProduct) => {
        const basketCopy = deepClone(basket)
        const basketUpdated = removeObjectById(idBasketProduct, basketCopy)
        setBasket(basketUpdated)
    }
    
    return { basket, handleAddToBasket, handleDeleteBasketProduct }
}


