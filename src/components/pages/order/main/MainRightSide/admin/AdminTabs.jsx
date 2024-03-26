import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../../theme";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
    
    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
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
            />
            <Tab
                label={"Modifier un produit"}
                Icon={<MdModeEditOutline />}
            />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
        .icon {
            color: ${theme.colors.white};
        }
    }
`;