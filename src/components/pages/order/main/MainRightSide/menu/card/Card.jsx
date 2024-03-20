import styled from "styled-components";
import {formatPrice} from "../../../../../../../utils/maths.js";
import {theme} from "../../../../../../../theme/index.jsx";
import {PrimaryButton} from "../../../../../../reusable-ui/PrimaryButton.jsx";

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
                        <PrimaryButton label={"Ajouter"} />
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
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
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
            font-family: Amatic SC,cursive;
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
                font-size: 36px;
                color: ${theme.colors.background_dark};
            }
        }

        .left-description {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            margin-left: 5px;
            
            p {
                font-size: 16px;
                font-family: "Open Sans", sans-serif;
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