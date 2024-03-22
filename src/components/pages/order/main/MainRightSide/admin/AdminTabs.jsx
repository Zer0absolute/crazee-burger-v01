import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTabs() {
    return (
        <AdminTabsStyled>
            <Tab
                Icon={<FiChevronDown />}
            />
            <Tab
                label={"Ajouter un produit"}
                Icon={<AiOutlinePlus/>}
            />
            <Tab
                label={"Modifier un produit"}
                Icon={<MdModeEditOutline />}
            />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    height: 43px;

    display: flex;
    margin-left: 70px;
`;