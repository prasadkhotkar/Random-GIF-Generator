import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from "../hooks/useGif";


//const API_KEY = process.env.RANDOM_GIF_GENERATOR;
const RANDOM_GIF_GENERATOR= "SwEUxCuwZAyHhKTkGy91dE98tbo32w1Z";


function Random () {
  const {gif,loading,fetchData}=useGif('');
  


  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${RANDOM_GIF_GENERATOR}`;

  //   const output = await axios.get(url);
  //   console.log(output);
  //   const imageSource=output.data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  //   // const imageSource = data.data.images.downsized_large.url;
  //   // setGif(imageSource);
  //   // console.log(imageSource);
  //   // setLoading(false);
  // }


  // useEffect(() => {
  //   fetchData();
  // }, []);

  function clickHandeler()
  {
  fetchData();
  }
  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]" >
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button onClick={clickHandeler } className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]'>Generate</button>
         
    </div>
  )
}

export default Random
