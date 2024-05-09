import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function ImagePreview({ imageSource, title }) {
    return (
        <ImagePreviewStyled>
            {imageSource ? <img src={imageSource} alt={title} /> : <div className="empty-image"><p>aucune image</p></div>}
        </ImagePreviewStyled>
    )
}

const ImagePreviewStyled = styled.div`
    grid-area: 1 / 1 / 4 / 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    .empty-image {
        display: flex;
        line-height: 1.5;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 88%;
        border: 1px solid ${theme.colors.greyLight};
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.greySemiDark};
        font-size: ${theme.fonts.size.P0};
        font-family: ${theme.fonts.family.globalText};
    }
`;
