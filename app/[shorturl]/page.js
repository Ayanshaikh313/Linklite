import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

// export default async function Page({ params }) {
//     const client = await clientPromise;
//     const db =  client.db("linkLite")
//     const collection = db.collection("url")
//     const shortUrl = (await params).shortUrl
    
//     const check = await collection.findOne({shortUrl:shortUrl})
//     if(check)
//         { 
//         redirect(check.url)
//         }
//     else{
//         redirect(`${process.env.NEXT_PUBLIC_HOST}`)
//     }

//     return <div>My Post: {url}</div>
//   }