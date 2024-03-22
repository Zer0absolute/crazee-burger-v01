import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function Tab({Icon, label}) {
    return (
        <TabStyled>
            <div className="icon">{Icon && Icon}</div>
            {label && <span className="label">{label}</span>}
        </TabStyled>
    )
}

const TabStyled = styled.button`
    padding: 0 22px;
    margin-right: 1px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top-left-radius: ${theme.borderRadius.round};
    border-top-right-radius: ${theme.borderRadius.round};
    border-width: 1px 1px 2px 1px;
    border-color: ${theme.colors.greyLight};
    border-style: solid;

    background: ${theme.colors.white};

    &:hover {
        border-bottom: 2px solid ${theme.colors.white};
        text-decoration: underline ${theme.colors.greySemiDark};
        text-underline-offset: 5px;
        text-decoration-thickness: 2px;
    }
    
    .label {
        padding-left: 13px;
        color: ${theme.colors.greySemiDark};
    }

    .icon {
        color: ${theme.colors.greySemiDark};
    }
`;