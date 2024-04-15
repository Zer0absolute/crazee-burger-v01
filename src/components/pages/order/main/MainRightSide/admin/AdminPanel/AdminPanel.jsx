import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "../getTabsConfig";

export default function AdminPanel() {
    const {
        currentTabSelected
    } = useContext(OrderContext)

    const tabs = getTabsConfig(currentTabSelected)
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {currentTabSelected === tabSelected.index && tabSelected.label}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 240px;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border: 1px solid ${theme.colors.greyLight};
    padding: 30px 5%;
`;