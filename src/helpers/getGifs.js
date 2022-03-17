export const getGifs = async (category) => {
    const apiKey = "2nJuzvi2p6kRAxrr8yqM77ejiNgcIx4g";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=12`;
    const request = await fetch(URL);
    const {data} = await request.json();
    const gifs=data.map((img)=>{
        return{
            id:img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        }

    });

    return gifs;
  };
