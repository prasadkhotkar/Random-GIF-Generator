import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//const API_KEY = process.env.RANDOM_GIF_GENERATOR;
const RANDOM_GIF_GENERATOR= "SwEUxCuwZAyHhKTkGy91dE98tbo32w1Z";


function Tag () {
 const [tag,setTag]=useState('')
  
 const {gif,loading,fetchData}=useGif('');
  

  function clickHandeler()
  {
  fetchData();
  }
  return (
    <div className='  w-1/2  bg-green-200  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]' >
      <h1 className='text-2xl underline uppercase font-bold '>Random {tag} Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input 
      type="text"
      onChange={(event)=>setTag(event.target.value)}
      value={tag} 
      className="w-10/12 text-lg py-2 rounded-lg text-center mb-[2px]"/>
      <button onClick={clickHandeler } className='w-10/12 bg-yellow-100 text-lg py-2 rounded-lg mt-[-10px]'>Generate</button>
         
    </div>
  )
}

export default Tag
