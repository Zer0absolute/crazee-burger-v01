import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import HintMessage from "./message/HintMessage";
import AddForm from "./forms/AddForm";
import EditForm from "./forms/EditForm";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus/>,
        content: <AddForm />,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
    }
]

export const getTabSelected = (tabs, currentTabSelected) => 
    tabs.find((tab) => tab.index === currentTabSelected)