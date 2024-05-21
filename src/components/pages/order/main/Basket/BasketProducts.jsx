import styled from "styled-components";
import BasketCard from "./BasketCard";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../MainRightSide/menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
            <TransitionGroup component={BasketProductsStyled}>
                {basket.map((basketProduct) => {
                    const menuProduct = findObjectById(basketProduct.id, menu)
                    return (
                        <CSSTransition appear={true} classNames={"basket-card slide-in-out"} key={basketProduct.id} timeout={500}>
                            <div className="basket-card">
                                <BasketCard
                                    {...menuProduct}
                                    onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                                    quantity={basketProduct.quantity}
                                    isClickable={isModeAdmin}
                                    onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
                                    isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                                    className={"card"}
                                />
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
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

    .slide-in-out-enter,
    .slide-in-out-appear {
        .card {
            transform: translateX(100px);
            opacity: 0%;
        }
    }

    .slide-in-out-enter-active,
    .slide-in-out-appear-active  {
        .card {
            transform: translateX(0px);
            opacity: 100%;
            transition: 0.5s;
        }
    }

    .slide-in-out-exit {
        .card {
            transform: translateX(0px);
            opacity: 100%;
        }
    }

    .slide-in-out-exit-active {
        .card {
            transform: translateX(-100px);
            opacity: 0%;
            transition: 0.5s;
        }
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