import styled from "styled-components";
import BasketCard from "./BasketCard";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../MainRightSide/menu/helper";

export default function BasketProducts() {
    const {
        basket, 
        isModeAdmin, 
        handleDeleteBasketProduct, 
        menu, 
        handleProductSelected, 
        productSelected, 
        username 
    } = useContext(OrderContext)

    const handleOnDelete = (event, id) => {
        event.stopPropagation()
        handleDeleteBasketProduct(id, username)
    }

    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) => {
                const menuProduct = findObjectById(basketProduct.id, menu)
                return (
                    <div className="basket-card" key={basketProduct.id}>
                        <BasketCard 
                            {...menuProduct}
                            onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                            quantity={basketProduct.quantity}
                            isClickable={isModeAdmin}
                            onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
                            isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                        />
                    </div>
                )
            })}
        </BasketProductsStyled>
    )
}


const BasketProductsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    &:hover {
        overflow: auto;
        scrollbar-color: initial;
    }

    .basket-card {
        margin: 10px 0;
        margin-left: 16px;
        height: 86px;
        width: 318px;
        box-sizing: border-box;

        &:first-child {
            margin-top: 20px;

            &:last-child { 
                margin-bottom: 20px;
            }
        }
    }
`;