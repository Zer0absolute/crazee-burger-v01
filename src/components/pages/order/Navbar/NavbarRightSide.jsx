import styled from "styled-components";
import {Profile} from "./Profile.jsx";
import {useContext} from "react";
import ToastAdmin from "./ToastAdmin.jsx";
import { toast } from "react-toastify";
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx";
import OrderContext from "../../../../context/OrderContext.jsx";

export const NavbarRightSide = () => {
    // eslint-disable-next-line no-unused-vars
    const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
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
        setIsModeAdmin(!isModeAdmin)
    }
    
    return (
        <NavbarRightSideStyled>
            <div className={"admin-buttom"}>
                <ToggleButton
                    isChecked={isModeAdmin}
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