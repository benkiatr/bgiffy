import React from 'react'
import {Container, SimpleGrid } from "@chakra-ui/react"
import ListGifs from './components/ListGifs'


function App() {
  return (
    <Container maxW={'7xl'} centerContent>
      <SimpleGrid columns={4} spacing={2}>
        <ListGifs keysearch='programming'/>
      </SimpleGrid>
    </Container>
  );
}

export default App;
