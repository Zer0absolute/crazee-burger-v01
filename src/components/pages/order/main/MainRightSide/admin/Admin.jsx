import styled from "styled-components";
import AdminTabs from "./AdminTabs.jsx";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";

export default function Admin() {
    return (
        <AdminStyled>
            <AdminTabs />
            <AdminPanel />
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`;