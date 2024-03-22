import styled from "styled-components";

export default function Tab({Icon, label}) {
    return (
        <TabStyled>
            <div className="icon">{Icon && Icon}</div>
            {label && <span className="label">{label}</span>}
        </TabStyled>
    )
}

const TabStyled = styled.div`
    
`;