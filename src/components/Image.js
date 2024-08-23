import styled from "styled-components";
import placaDeVideo from '../img/PLACA DE VIDEO.jpg';

function Image(){
    const ImageContainer = styled.div`

    width: 150px;
    margin: auto;
    height: 150px;
    border: 2px solid;
    object-fit: cover;
    object-position: center;
    display: flex;
    `

    const ImageContent = styled.img`
    width: 100px;
    object-fit: cover;
    object-position: center;
    margin: auto;
    `


    return(
        <ImageContainer>
            <ImageContent src = {placaDeVideo} alt=""/>
        </ImageContainer>
    )
}

export default Image;