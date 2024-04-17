import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabSelected, tabsConfig } from "../tabsConfig";

export default function AdminPanel() {
    const {
        currentTabSelected
    } = useContext(OrderContext)

    const tabs = tabsConfig()
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {tabSelected && tabSelected.content}
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