
import { Container, SimpleGrid } from '@mantine/core';
import './App.css';
import CardComponent from './components/Card';


const storeItems = [
  {
    name: "A",
    price: 20
  },
  {
    name: "B",
    price: 10
  },
  {
    name: "C",
    price: 30
  }
];

function App() {
  return (
    <Container className="App">
      <SimpleGrid cols={3}>
        {
          storeItems.map(({ name, price }, index) => {
            return <CardComponent name={name} price={price} key={index} onAdd={() => console.log("eklendi", name)} />
          })
        }
      </SimpleGrid>
    </Container>
  );
}

export default App;
