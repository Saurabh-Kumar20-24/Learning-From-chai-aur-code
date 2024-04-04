import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()

    //the code below can be replaced using loader in router i.e. 

    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Saurabh-Kumar20-24')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='bg-gray-500 text-center m-4 p-2 text-white'>
      Github followers : {data.followers}
      <img width={300} src="data.avatar_url" alt="github pic" />
    </div>
  )
}

export default Github

export const githubLoaderInfo= async ()=> {
    const response = await fetch('https://api.github.com/users/Saurabh-Kumar20-24')
    return response.json()
}
