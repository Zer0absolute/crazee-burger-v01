import styled, { css } from "styled-components";
import {formatPrice} from "../../utils/maths.js";
import {theme} from "../../theme/index.jsx";
import {Button} from "./Button.jsx";
import { TiDelete } from "react-icons/ti";

export const Card = ({imageSource, title, price, hasDeleteButton, onDelete, onClick, isHoverable, isSelected}) => {
    return (
        <CardStyled onClick={onClick} isHoverable={isHoverable}>
            <div className="card" style={isSelected ? {background: "orange"} : {}}>
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
                                label={"Ajouter"}
                                version={"normal"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    ${(props) => props.isHoverable && hoverableStyle}
    border-radius: ${theme.borderRadius.extraRound};
    border: 1px solid red;
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