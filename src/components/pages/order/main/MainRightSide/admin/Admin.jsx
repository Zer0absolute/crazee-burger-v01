import styled from "styled-components";
import AdminPanel from "./AdminPanel.jsx";
export default function Admin() {
    return (
        <AdminStyled>
            <AdminPanel />
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    background-color: red;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`;