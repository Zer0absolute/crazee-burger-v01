import styled from "styled-components";
import {useState} from "react";
import {fakeMenu} from "../../../../../../fakeData/fakeMenu.js";
import {Card} from "./card/Card.jsx";
import {theme} from "../../../../../../theme/index.jsx";

export const Menu = () => {

    const [menu, setMenu] = useState(fakeMenu.LARGE);

    return (
        <MenuStyled>
            {menu.map(({id, imageSource, title, price}) => {
                return (
                    <Card
                        key={id}
                        imageSource={imageSource}
                        title={title}
                        price={price}
                    />
                )
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    background: ${theme.colors.background_white};
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`