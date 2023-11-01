
import { useState } from 'react'
import { Container, SimpleGrid, List, ThemeIcon, Input, Button, Group } from '@mantine/core';
import './App.css';
import CardComponent from './components/Card';
import { IconCircleCheck } from '@tabler/icons-react';

const storeItems = [
  {
    name: "Saat",
    src: "1",
    price: 20000
  },
  {
    name: "Retro Kamera",
    src: "2",
    price: 10000
  },
  {
    name: "Oyuncak Araba",
    src: "3",
    price: 30000
  },
  {
    name: "Nikon Kamera",
    src: "4",
    price: 30000
  },
  {
    name: "Kulaklık",
    src: "5",
    price: 30000
  }
];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <Group align='end'>
        <Input.Wrapper label="Arama">
          <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Temizle</Button>
      </Group>
      <SimpleGrid cols={3} className='Store'>
        {
          filteredItems.map(({ name, price, src }, index) => {
            return (
              <CardComponent
                name={name}
                price={price}
                src={src}
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
