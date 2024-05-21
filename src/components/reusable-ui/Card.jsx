import styled, { css } from "styled-components";
import {formatPrice} from "../../utils/maths.js";
import {theme} from "../../theme/index.jsx";
import {Button} from "./Button.jsx";
import { TiDelete } from "react-icons/ti";
import { fadeInFromRight } from "../../theme/animation.js";

export const Card = ({imageSource, title, price, hasDeleteButton, onDelete, onClick, isHoverable, isSelected, onAdd}) => {
    return (
        <CardStyled onClick={onClick} $isHoverable={isHoverable} $isSelected={isSelected}>
            <div className="card">
                <div className="delete-button">
                    {hasDeleteButton && <button aria-label="delete-button" onClick={onDelete}>
                        <TiDelete />
                    </button>}
                </div>
                <div className="image">
                    <img src={imageSource} alt={title}/>
                </div>
                <div className="text-info">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="left-description">
                        <p>{formatPrice(price)}</p>
                        <div className="right-description">
                            <Button
                                className={"primary-button"}
                                label={"Ajouter"}
                                version={"normal"}
                                onClick={onAdd}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    ${({ $isHoverable }) => $isHoverable && hoverableStyle}
    border-radius: ${theme.borderRadius.extraRound};
    height: 330px;

    .card {
        box-sizing: border-box;
        width: 240px;
        display: grid;
        height: 330px;
        position: relative;
        background: ${theme.colors.white};
        align-items: center;
        justify-content: center;
        grid-template-rows: 65% 1fr;
        box-shadow: ${theme.shadows.medium};
        border-radius: ${theme.borderRadius.extraRound};

        .delete-button {
            font-size: 30px;
            position: absolute;
            top: 15px;
            left: 195px;
            
            button {
                border: none;
                cursor: pointer;
                font-size: 30px;
                background: none;
                color: ${theme.colors.primary};
                animation: ${fadeInFromRight} 500ms ease-out;

                &:hover {
                    color: ${theme.colors.red};
                    transition: color 0.3s ease;
                }
            }
        }
        
        .image {
            width: 200px;
            height: 145px;
            margin-top: 50px;
            
            img {
                object-fit: contain;
                height: 100%;
                width: 100%;
            }
        }

        .text-info {
            width: 200px;
            height: 110px;

            .title {
                font-family: ${theme.fonts.family.stylish};
                font-weight: ${theme.fonts.weights.bold};
                padding: 0 5px 5px 5px;
                white-space: nowrap;
                height: 46px;
                max-width: 200px;
                
                h3 {
                    margin: 0;
                    padding: 0;
                    width: 195px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: ${theme.fonts.size.P4};
                    color: ${theme.colors.background_dark};
                }
            }

            .left-description {
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                margin-left: 5px;
                margin-top: -5px;
                
                p {
                    font-size: ${theme.fonts.size.P0};
                    font-family: ${theme.fonts.family.globalText};
                    color: ${theme.colors.primary};
                }

                .right-description {
                    width: 98px;
                    height: 38px;

                    button {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        ${({ $isHoverable, $isSelected}) => $isHoverable && $isSelected && selectedStyle}
    }
`

const hoverableStyle = css`
    &:hover {
        transform: scale(1.05);
        transition: ease-out 0.25s;
        box-shadow: ${theme.shadows.orangeHighlight};
        cursor: pointer;
    }
`

const selectedStyle = css`
    background: ${theme.colors.primary};
    .primary-button {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.white};
        transition: all 200ms ease-out;
        
        &:hover {
            span {
                color: ${theme.colors.white};
            }
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.white};
            transition: all 200ms ease-out;
        }
        &:active {
            background: ${theme.colors.white};
            span {
                color: ${theme.colors.primary};
            }
        }

        &.is-disabled {
            opacity: 50%;
            cursor: not-allowed;
            z-index: 2;
        }

        &.with-focus {
            border: 1px solid white;
            background-color: ${theme.colors.white};
            span {
                color: ${theme.colors.primary};
            }
            
            &:hover {
                span {
                    color: ${theme.colors.white};
                }
                background-color: ${theme.colors.primary};
                border: 1px solid ${theme.colors.white};
            }
            
            &:active {
                background-color: ${theme.colors.white};
                span {
                    color: ${theme.colors.primary};
                }
            }
        }
    }

    .delete-button {
        button {
            color: ${theme.colors.white};
            :active {
                color: ${theme.colors.white};
            }
        }
    }

    .text-info {
        .left-description {
            p {
                color: ${theme.colors.white};
            }
        }
    }
`
