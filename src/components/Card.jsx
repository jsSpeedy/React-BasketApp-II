import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const CardComponent = ({ name, price, src, onAdd }) => {
    console.log(src);
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={"/assets/img/" + src + ".jpg"}
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