export const getGifs = async (category) => {
    try {
        const apiKey = 'MrrAqH6IY9rFtW1qFmT1gBWMxHV1nnDB';
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
        const { data } = await response.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        console.log(gifs);
        return gifs;
    }catch(error){
        console.error(error)
    }
}
