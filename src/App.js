
import { useState } from 'react'
import { Container, SimpleGrid, List, ThemeIcon } from '@mantine/core';
import './App.css';
import CardComponent from './components/Card';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

const storeItems = [
  {
    name: "Televizyon",
    price: 20000
  },
  {
    name: "Robot Süpürge",
    price: 10000
  },
  {
    name: "Laptop",
    price: 30000
  }
];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  return (
    <Container>
      <SimpleGrid cols={3} className='Store'>
        {
          storeItems.map(({ name, price }, index) => {
            return (
              <CardComponent
                name={name}
                price={price}
                key={index}
                onAdd={() => setBasketItems([...basketItems, { name }])}
              />
            )
          })
        }
      </SimpleGrid>
      <List
        className="List"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
      >
        {
          basketItems.map(({ name }, index) => {
            return (
              <List.Item key={index}>{name}</List.Item>
            )
          })
        }

      </List>
    </Container>
  );
}

export default App;
