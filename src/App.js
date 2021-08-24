import React,{ useState, useEffect } from 'react';
const { Stack, Image, Container, Button } = require("@chakra-ui/react");

const Gifs = [
  'https://media1.giphy.com/media/Qc0BxWM9TxljvJug2x/giphy.gif?cid=ecf05e474yy9a63y92j9t9sitsa47cm355jvok1qdwuax6iy&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/yp21ePWEFzL3gZlQup/giphy.gif?cid=ecf05e474bcklj8pzi3rqqsylcuy3dki4g65mslkif3gueid&rid=giphy.gif&ct=g'
]

const Other_Gifs =[
  'https://media3.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif?cid=ecf05e4732scf905kbnjvqerhenz3856g6nruxn7t07vuyle&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e47cpjuz9kx9aicwfjh059xuql8yo5b6z88k6s54s0n&rid=giphy.gif&ct=g'
]

function App() {
  const [gifs,setGifs]=useState(Gifs)

  useEffect(()=>{
    setGifs(Other_Gifs)
  },[])

  return (
    <Container maxW={'7xl'} centerContent bg={'blue.300'}>
      <Stack>
        {
          gifs.map(gif => <Image w="200px" src={gif} />)
        }
        <Button onClick={()=>setGifs(Other_Gifs)}>Cambiar gifs</Button>
      </Stack>
    </Container>
  );
}

export default App;
