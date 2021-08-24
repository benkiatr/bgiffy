const api_key = 'LMGUAoLW5xZXkyvIh4GZ66aVftiS4GbK'

export default function getGifs ({keysearch = 'panda'} = {})
{
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keysearch}&limit=25&offset=0&rating=g&lang=es`

    return fetch(urlApi)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => {
          const {images, title, id} = image
          const {url} = images.downsized_medium

          return {id, title, url}
        })
        return gifs
      })
}