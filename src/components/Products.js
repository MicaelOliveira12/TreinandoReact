import styled from 'styled-components';
import Card from './Card';

const Products = ({products}) => {
    const ProductsContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `


    return(
        <ProductsContainer>
        {products.map(product => (
            <Card key={product.id} product={product}/>
        ))}
        </ProductsContainer>
    )
}

export default Products;