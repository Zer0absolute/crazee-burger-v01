import styled from "styled-components";
import BasketCard from "./BasketCard";

export default function BasketProducts({basket}) {
    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) => (
                <div className="basket-card" key={basketProduct.id}>
                    <BasketCard {...basketProduct}/>
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