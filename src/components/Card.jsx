import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const CardComponent = ({ name, price, onAdd }) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{name}</Text>
                <Badge color="pink" variant="light">
                    Favori
                </Badge>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Text size="sm" c="dimmed">
                {price} TL
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={onAdd}>
                Sepete Ekle
            </Button>
        </Card>
    )
}

export default CardComponent