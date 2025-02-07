"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

    const Generate=() => {
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shortUrl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>{ 
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    console.log(result)
    alert(result.message)
    setUrl("")
    setshorturl("")
    })
  .catch((error) => console.error(error));
    }
    
    
  return (
    <div className='md:mx-auto  max-w-lg bg-green-100 p-8 my-16 flex flex-col md:w-full w-[70vh] gap-4 rounded-lg'>
        <h1 className='font-bold text-lg'>Generate your Short URL</h1>
        <div className='flex flex-col gap-3'>
            <input className='px-4 py-2 rounded-md' type="text" placeholder='Enter Your URL' />
            {/* <input value={url} className='px-4 py-2 rounded-md' type="text" placeholder='Enter Your URL' onChange={e=>{setUrl(e.target.value)} */}
            <input value={shorturl} type="text" className='px-4 py-2 rounded-md ' placeholder='Enter your preferred short URL text' onChange={e=>{setshorturl(e.target.value)}} />
            {/* <button onClick={Generate} className="my-3 px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(0,220,0),2px_2px_rgba(0,220,0),3px_3px_rgba(0,220,0),4px_4px_rgba(0,220,0),5px_5px_0px_0px_rgba(0,220,0)] ">
  Generate
</button> */}
            <button className="my-3 px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(0,220,0),2px_2px_rgba(0,220,0),3px_3px_rgba(0,220,0),4px_4px_rgba(0,220,0),5px_5px_0px_0px_rgba(0,220,0)] ">
  Generate
</button>
        </div>
        {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
    </div>
  )
}

export default Shorten
