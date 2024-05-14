import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findToArray } from "../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findToArray(productToAdd.id, basketCopy)
        // 1er cas : Le produit n'est pas dans le basket
        if(!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }

            const basketUpdated = [newBasketProduct, ...basketCopy]
            setBasket(basketUpdated)
        }

        //2eme cas : le produit est déjà dans le basket
    }
    return { basket, handleAddToBasket }
}