import React,{ useState, useEffect} from "react";
import getGifs from '../apis/getGifs'
import Gif from "./Gif";

export default function ListGifs({params}) {
  const [gifs, setGifs] = useState([]);
  const {keysearch} = params

  useEffect(() => {
    getGifs({ keysearch })
        .then((gifs) => setGifs(gifs));
  }, [keysearch]);

  return (
    <>
    {
      gifs.map(({ id, url, title }) => (
        <Gif 
          key={id} 
          id={id} 
          title={title} 
          url={url} 
          />
      ))
    }
    </>
  )
}
