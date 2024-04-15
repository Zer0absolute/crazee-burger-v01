import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
    const {
        isCollapsed, 
        setIsCollapsed, 
        currentTabSelected,
        setCurrentTabSelected,
    } = useContext(OrderContext)
    

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    const selectTab = (tabSelected) => {
        setIsCollapsed(false)
        setCurrentTabSelected(tabSelected)
    }

    const tabs = getTabsConfig(currentTabSelected)

    return (
        <AdminTabsStyled>
            <Tab 
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />} 
                onClick={handleClick}
                className={isCollapsed ? "is-active" : ""}
            />
            {tabs.map((tab) => <Tab 
                key={tab.index}
                label={tab.label} 
                Icon={tab.Icon}
                onClick={() => selectTab(tab.index)}
                className={tab.className}
                />
            )}
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