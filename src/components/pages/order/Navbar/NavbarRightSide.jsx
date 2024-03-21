import styled from "styled-components";
import {Profile} from "./Profile.jsx";
import ToggleButton from "./ToggleButton.jsx";
import {useState} from "react";
import ToastAdmin from "./ToastAdmin.jsx";
import { toast } from "react-toastify";

export const NavbarRightSide = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(false);

    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }
    return (
        <NavbarRightSideStyled>
            <div className={"admin-buttom"}>
                <ToggleButton
                    labelIfChecked={"DÉSACTIVER LE MODE ADMIN"}
                    labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
                    onToggle={displayToastNotification}
                />
            </div>
            <Profile/>
            <ToastAdmin/>
        </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    
    .admin-buttom {
        display: flex;
        align-items: center;
        margin-right: 60px;
    }
`