import styled from "styled-components";
import Image from './Image';

function Cards({ product }) {

    const ContainerCard = styled.div`
    width: 250px;
    height: 250px;
    margin: 10px;
    border: 2px solid;
    `


    const TitleCard = styled.h1`
        font-size: 1.5em;
        text-align: center;
    `

    const DescriptionCard = styled.h4`
    font-size: 0.8em;
    text-align: center;    
    `
    return (

        <ContainerCard>
            <TitleCard>
                {product.title}
            </TitleCard>
            <DescriptionCard>
                {product.description}
            </DescriptionCard>
            <Image>{product.image}</Image>
        </ContainerCard >
    )
}


export default Cards;