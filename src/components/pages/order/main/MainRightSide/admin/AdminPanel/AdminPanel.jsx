import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function AdminPanel() {
    return (
        <AdminPanelStyled>
            AdminPanel
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