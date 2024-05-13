'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const Data = () => {

    const [movieData, setMovieDate] = useState([])

    const url = "https://gen-zsquare.com/api/user";

    const getMovieDatas = async () =>{
        const response = await fetch(url, {
            method: "GET",
            headers : {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        setMovieDate(data)
        console.log(data);
    }


    useEffect(()=>{
        getMovieDatas()
    },[])


  return (
    <div>
        <h2>This home page</h2>

        <div className='grid grid-cols-3 gap-5'>
            {movieData.map((data, index)=>(

                <div key={index} className='bg-purple-500 p-10'>
                    <h2>Id: {data.id}</h2>
                    <h2>Name: {data.name}</h2>
                    <h2>Email: {data.email}</h2>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Data