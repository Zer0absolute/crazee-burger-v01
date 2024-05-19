import styled from "styled-components";
import AdminTabs from "./AdminPanel/AdminTabs.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";

export default function Admin() {
    const { isCollapsed } = useContext(OrderContext)

    return (
        <AdminStyled>
            <AdminTabs/>
            {!isCollapsed && <AdminPanel />}
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`;