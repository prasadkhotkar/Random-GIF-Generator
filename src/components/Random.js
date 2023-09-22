import React, { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from './Spinner';

const API_KEY = process.env.RANDOM_GIF_GENERATOR;

function Random () {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandeler()
  {

  }
  return (
    <div className='w-1/2 h-[450px] bg-green-200  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]' >
      <h1 className='text-2xl underline uppercase font-bold '>A Random Gif</h1>
      <img src={gif} width='450px' />
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button onClick={clickHandeler } className='w-10/12 bg-yellow-100 text-lg py-2 rounded-lg'>Generate</button>
         
    </div>
  )
}

export default Random
