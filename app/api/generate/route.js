
import clientPromise from "@/lib/mongodb";

export async function POST(req) {

    const body =await req.json()
    const client = await clientPromise;
    const db =  client.db("linkLite")
    const collection = db.collection("url")

    const check = await collection.findOne({shortUrl:body.shortUrl})
    if(check)
    { 
    return Response.json({success:false, error:true, message:"URL already exists"})
    }


    const Result = await collection.insertOne(
        {
            url:body.url,
            shortUrl:body.shortUrl
        }
    )


    return Response.json({success:true, error:false, message:"URL Generated Succesfully"})
    
}