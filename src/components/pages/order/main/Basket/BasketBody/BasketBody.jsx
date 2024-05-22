import EmptyBasket from "./EmptyBasket";
import BasketProducts from './BasketProducts'
import { isEmpty } from "../../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function BasketBody() {
    const { basket, menu } = useContext(OrderContext)

    return (
        <>
            {isEmpty(basket) ? <EmptyBasket isLoading={!menu}/> : <BasketProducts />}
        </>
    )
}