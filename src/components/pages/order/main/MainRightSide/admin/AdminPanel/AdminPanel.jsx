import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "./getTabsConfig";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";

export default function AdminPanel() {
    const {
        currentTabSelected,
        productSelected
    } = useContext(OrderContext)

    const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
    const tabs = getTabsConfig(hasAlreadyBeenClicked)
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {tabSelected && tabSelected.content}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 180px;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border: 1px solid ${theme.colors.greyLight};
    padding: 30px 5%;
`;