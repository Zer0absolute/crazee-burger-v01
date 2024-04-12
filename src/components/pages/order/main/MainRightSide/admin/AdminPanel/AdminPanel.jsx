import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import OrderContext from "../../../../../../../context/OrderContext";
import { useContext } from "react";

export default function AdminPanel() {
    const {
        isAddTabSelected,
        isEditTabSelected 
    } = useContext(OrderContext)

    return (
        <AdminPanelStyled>
            {isAddTabSelected && "Ajouter un produit"}
            {isEditTabSelected && "Modifier un produit"}
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