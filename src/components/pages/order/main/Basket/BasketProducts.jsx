import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";

export default function BasketProducts({basket, isModeAdmin, handleDeleteBasketProduct}) {
    const handleOnDelete = () => {
        handleDeleteBasketProduct(id)
    }

    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) => (
                <div className="basket-card" key={basketProduct.id}>
                    <BasketCard 
                        imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_BY_DEFAULT}
                        onDelete={() => handleDeleteBasketProduct(basketProduct.id)} 
                        isModeAdmin={isModeAdmin} 
                        {...basketProduct}
                    />
                </div>
            ))}
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