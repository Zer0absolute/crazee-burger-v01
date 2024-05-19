import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

export const getInputTextsConfig = (newProduct) => [
    {
        id: "0",
        name: "title",
        value: newProduct.title,
        Icon: <FaHamburger />,
        placeholder: "Nom du produit (ex: Super Burger)",
        version: "minimalist",
    },
    {
        id: "1",
        name: "imageSource",
        value: newProduct.imageSource,
        Icon: <BsFillCameraFill />,
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        version: "minimalist",
    },
    {
        id: "2",
        name: "price",
        value: newProduct.price ? newProduct.price : "",
        Icon: <MdOutlineEuro />,
        placeholder: "Prix",
        version: "minimalist",
    }
]