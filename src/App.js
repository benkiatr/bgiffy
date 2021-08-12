import React,{ useState } from 'react';
const { Stack, Text, Image } = require("@chakra-ui/react");

function App() {
  const [gifs,setGifs]=useState(['https://media.giphy.com/media/fAmnJKCwuXtDiEhNwg/giphy.gif'])

  return (
    <div className="App">
      <Stack>
        <Text>Hola Mundo con chakra</Text>
        <Image w="200px" src={gifs}></Image>
      </Stack>
    </div>
  );
}

export default App;
