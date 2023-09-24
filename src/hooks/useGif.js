import axios from 'axios';
import { useState,useEffect } from 'react';




//const API_KEY = process.env.RANDOM_GIF_GENERATOR;
const RANDOM_GIF_GENERATOR= "SwEUxCuwZAyHhKTkGy91dE98tbo32w1Z";



function useGif (tag) {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState('');
  
  const Url=`https://api.giphy.com/v1/gifs/random?api_key=${RANDOM_GIF_GENERATOR}`;

  async function fetchData() {
    setLoading(true)
    
    const output = await axios.get(tag ? "${Url}&tag=${tag}" : "Url");
    const imageSource=output.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
    // const imageSource = data.data.images.downsized_large.url;
    // setGif(imageSource);
    // console.log(imageSource);
    // setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return{gif,loading,fetchData};
}

export default useGif