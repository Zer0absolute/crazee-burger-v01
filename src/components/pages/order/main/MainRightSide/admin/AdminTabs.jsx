import styled from "styled-components";
import Tab from "./Tab";

export default function AdminTabs() {
    return (
        <AdminTabsStyled>
            <Tab
                label={"tab"}
            />
            <Tab
                label={"tab1"}
            />
            <Tab
                label={"tab1"}
            />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    background-color: blue;
    height: 43px;
`;