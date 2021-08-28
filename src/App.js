import React from 'react'
import {Container, Heading, SimpleGrid } from "@chakra-ui/react"
import ListGifs from './components/ListGifs'
import { Link,Route } from "wouter"


function App() {
  return (
    <Container maxW={'7xl'} centerContent>
      <Heading>bGiffy</Heading>
      <Link to="/gif/programming">Gifs de Programacion</Link>
      <Link to="/gif/matrix">Gifs de Matrix</Link>
      <Link to="/gif/naruto">Gifs de Naruto</Link>
      <Link to="/gif/css">Gifs de CSS</Link>



      <SimpleGrid columns={4} spacing={2}>
        <Route 
          path="/gif/:keysearch"
          component={ListGifs} />
      </SimpleGrid>
    </Container>
  );
}

export default App;
