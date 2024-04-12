import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function AdminTabs() {
    const {
        isCollapsed, 
        setIsCollapsed, 
        isAddTabSelected, 
        setIsAddTabSelected, 
        isEditTabSelected, 
        setIsEditTabSelected
    } = useContext(OrderContext)
    

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    const selectTab = (tabSelected) => {
        setIsCollapsed(false)

        if(tabSelected === "add") {
            setIsAddTabSelected(true)
            setIsEditTabSelected(false)
        }

        if(tabSelected === "edit") {
            setIsEditTabSelected(true)
            setIsAddTabSelected(false)
        }
    }

    return (
        <AdminTabsStyled>
            <Tab 
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />} 
                onClick={handleClick}
                className={isCollapsed ? "is-active" : ""}
            />
            <Tab
                label={"Ajouter un produit"}
                Icon={<AiOutlinePlus/>}
                onClick={() => selectTab("add")}
                className={isAddTabSelected ? "is-active" : ""}
            />
            <Tab
                label={"Modifier un produit"}
                Icon={<MdModeEditOutline />}
                onClick={() => selectTab("edit")}
                className={isEditTabSelected ? "is-active" : ""}
            />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};

        .label {
            color: ${theme.colors.white};
        }
        
        .icon {
            color: ${theme.colors.white};
        }
    }
`;