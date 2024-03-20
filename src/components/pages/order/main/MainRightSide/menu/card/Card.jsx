import styled from "styled-components";
import {formatPrice} from "../../../../../../../utils/maths.js";

export const Card = ({imageSource, title, price}) => {
    return (
        <CardStyled>
            <div className="image">
                <img src={imageSource} alt={title}/>
            </div>
            <div className="text-info">
                <div className="title">
                    {title}
                </div>
                <div className="left-description">
                    {formatPrice(price)}
                    <div className="right-description">
                        <button>
                            button
                        </button>
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background: blue;
    width: 240px;
    display: grid;
    height: 330px;
    position: relative;
    align-items: center;
    justify-content: center;
    grid-template-rows: 65% 1fr;

    .image {
        background: green;
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
        background: red;
        width: 200px;
        height: 110px;

        .title {
            font-family: Amatic SC, cursive;
            text-overflow: ellipsis;
            border: 1px solid purple;
            display: flex;
            align-items: center;
            height: 46px;
            margin-left: 5px;
            font-size: 36px;
        }

        .left-description {
            border: 1px solid green;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            margin-left: 5px;

            .right-description {
                border: 1px solid yellow;
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