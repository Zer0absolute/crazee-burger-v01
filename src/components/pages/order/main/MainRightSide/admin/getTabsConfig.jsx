import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentTabSelected) => [
    // {
    //     index: "chevronUpDown",
    //     label: "",
    //     Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    //     className: isCollapsed ? "is-active" : "",
    // },
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus/>,
        // className: currentTabSelected === "add" ? "is-active" : "",
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        // className: currentTabSelected === "edit" ? "is-active" : "",
    }
]

export const getTabSelected = (tabs, currentTabSelected) => 
    tabs.find((tab) => tab.index === currentTabSelected)