import React,{ useState, useEffect} from "react";
import getGifs from '../apis/getGifs'
import Gif from "./Gif";

export default function ListGifs({ keysearch }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keysearch })
        .then((gifs) => setGifs(gifs));
  }, [keysearch]);

  return gifs.map(({ id, url, title }) => (
    <Gif key={id} id={id} title={title} url={url} />
  ));
}
