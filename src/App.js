import React,{ useState, useEffect } from 'react'
import {Container, SimpleGrid } from "@chakra-ui/react"
import getGifs from './apis/getGifs'
import Gif from './components/Gif'


function App() {
  const [gifs,setGifs]=useState([])

  useEffect(()=>{
    getGifs({keysearch: 'code'}).then(gifs => setGifs(gifs))
  },[])

  return (
    <Container maxW={'7xl'} centerContent>
      <SimpleGrid columns={4} spacing={2}>
        {
          gifs.map(gif => <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} />)
        }
      </SimpleGrid>
    </Container>
  );
}

export default App;
