
import { useState } from 'react'
import { Container, SimpleGrid, List, ThemeIcon, Input } from '@mantine/core';
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
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = basketItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
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
      <Input.Wrapper label="Arama">
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>
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
          filteredItems.map(({ name }, index) => {
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
