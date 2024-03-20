import styled from "styled-components";
import {formatPrice} from "../../../../../../../utils/maths.js";
import {theme} from "../../../../../../../theme/index.jsx";
import {Button} from "../../../../../../reusable-ui/Button.jsx";

export const Card = ({imageSource, title, price}) => {
    return (
        <CardStyled>
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
                        <Button label={"Ajouter"} />
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
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
`