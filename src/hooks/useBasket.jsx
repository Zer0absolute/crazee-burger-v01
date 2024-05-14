import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findToArray } from "../utils/array"
import BasketProducts from "../components/pages/order/main/Basket/BasketProducts"

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
        } else {
            //2eme cas : le produit est déjà dans le basket
            const indexOfBasketProductToIncrement = basket.findIndex(
                (BasketProduct) => BasketProduct.id === productToAdd.id
            )
            basketCopy[indexOfBasketProductToIncrement].quantity += 1
            setBasket(basketCopy)
        }

    }
    return { basket, handleAddToBasket }
}