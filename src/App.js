import Title from './components/Title'
import Description from './components/Description'
import styled from 'styled-components';
import './App.css';
import Products from './components/Products';

function App() {

  const products = [
    {
    id: 1,
    "title": "Placa De Video",
    "description": "GTX 1",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    id: 2,
    "title": "Produto 2",
    "description": "Descrição detalhada do produto 2.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    id: 3,
    "title": "Produto 3",
    "description": "Descrição detalhada do produto 3.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    id: 4,
    "title": "Produto 4",
    "description": "Descrição detalhada do produto 4.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    
    id: 5,
    "title": "Produto 5",
    "description": "Descrição detalhada do produto 5.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    id: 6,
    "title": "Produto 6",
    "description": "Descrição detalhada do produto 6.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    id: 7,
    "title": "Produto 7",
    "description": "Descrição detalhada do produto 7.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    id: 8,
    "title": "Produto 8",
    "description": "Descrição detalhada do produto 8.",
    "imageUrl": "https://via.placeholder.com/150"
    },
    {
    id: 9,
    "title": "Produto 9",
    "description": "Descrição detalhada do produto 9.",
    "imageUrl": "https://via.placeholder.com/150"
    
    },
    {
    id: 10,
    "title": "Produto 10",
    "description": "Descrição detalhada do produto 10.",
    "imageUrl": "https://via.placeholder.com/150"
    }];

  const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  `
  return (
    <Container>
      <Title/>
      <Description/>
      <Products products={products}/>
    </Container>
  );
}

export default App;
