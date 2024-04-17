import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function AddForm() {
    return (
        <AddFormStyled>
            <div className="image-preview">
                {/* <img src={"../../../../../../../../public/images/burger1.png"} alt="" /> */}
                <div className="empty-image">
                    <p>aucune image</p>
                </div>
            </div>
            <div className="input-name">
                <div className="icon">
                    <FaHamburger />
                </div>
                <input type="text" placeholder="Nom du produit (ex: Super Burger)" />
            </div>
            <div className="input-link">
                <div className="icon">
                    <BsFillCameraFill />
                </div>
                <input type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
            </div>
            <div className="input-price">
                <div className="icon">
                    <MdOutlineEuro />
                </div>
                <input type="text" placeholder="Prix" />
            </div>
            <div className="input-button">
                <button>Ajouter un nouveau produit au menu</button>
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    height: 100%;
    width: 70%;

    .image-preview { 
        grid-area: 1 / 1 / 4 / 2;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }

        .empty-image {
            display: flex;
            line-height: 1.5;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            border: 1px solid ${theme.colors.greyLight};
            border-radius: ${theme.borderRadius.round};
            color: ${theme.colors.greySemiDark};
            font-size: ${theme.fonts.size.P0};
            font-family: ${theme.fonts.family.globalText};
        }
    }

    .input-name { 
        grid-area: 1 / 2 / -4 / 3;
        height: 35px;

        .icon {
                display: flex;
                position: absolute;
                height: 15px;
                width: 15px;
                margin: 10px 13px 10px 24px;
                color: ${theme.colors.greyBlue}
            }
        
        input {
            height: 35px;
            width: 100%;
            padding-left: 50px;
            border-radius: 5px;
            border: none;
            background: ${theme.colors.background_white};
            font-family: ${theme.fonts.family.globalText};

            &::placeholder {
                color: ${theme.colors.greyMedium};
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .input-link { 
        grid-area: 2 / 2 / -3 / 3;
        
        .icon {
                display: flex;
                position: absolute;
                height: 15px;
                width: 15px;
                margin: 10px 13px 10px 24px;
                color: ${theme.colors.greyBlue}
            }
        
        input {
            height: 35px;
            width: 100%;
            padding-left: 50px;
            border-radius: 5px;
            border: none;
            background: ${theme.colors.background_white};
            font-family: ${theme.fonts.family.globalText};
            
            &::placeholder {
                color: ${theme.colors.greyMedium};
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .input-price { 
        grid-area: 3 / 2 / -2 / 3; 

        .icon {
                display: flex;
                position: absolute;
                height: 15px;
                width: 15px;
                margin: 10px 13px 10px 24px;
                color: ${theme.colors.greyBlue}
            }
        
        input {
            height: 35px;
            width: 100%;
            padding-left: 50px;
            border-radius: 5px;
            border: none;
            background: ${theme.colors.background_white};
            font-family: ${theme.fonts.family.globalText};
            
            &::placeholder {
                color: ${theme.colors.greyMedium};
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .input-button { 
        grid-area: 4 / -2 / -1 / -1;

        button {
            width: 50%;
            height: 35px;
            background: ${theme.colors.success};
            color: ${theme.colors.white};
            border-radius: 5px;
            border: none;
        }
    }
`;