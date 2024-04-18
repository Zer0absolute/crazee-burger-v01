import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { Button } from "../../../../../../reusable-ui/Button";
import { TextInput } from "../../../../../../reusable-ui/TextInput";

export default function AddForm() {
    return (
        <AddFormStyled>
            <div className="image-preview">
                <img src={"/images/burger1.png"} alt="" />
                {/* <div className="empty-image">
                    <p>aucune image</p>
                </div> */}
            </div>
            <div className="input-name">
                <TextInput 
                    version={"minimalist"}
                    Icon={<FaHamburger />}
                    placeholder="Nom du produit (ex: Super Burger)"
                />
            </div>
            <div className="input-link">
                <TextInput 
                    version={"minimalist"}
                    Icon={<BsFillCameraFill />}
                    placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                />
            </div>
            <div className="input-price">
                <TextInput 
                    version={"minimalist"}
                    Icon={<MdOutlineEuro />}
                    placeholder="Prix"
                />
            </div>
            <div className="succes-button">
                <Button
                    label={"Ajouter un nouveau produit au menu"}
                    version={"success"}
                />
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
    }

    .input-link { 
        grid-area: 2 / 2 / -3 / 3;
    }

    .input-price { 
        grid-area: 3 / 2 / -2 / 3; 
    }

    .succes-button { 
        grid-area: 4 / -2 / -1 / -1;
    }
`;