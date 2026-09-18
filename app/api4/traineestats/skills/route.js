import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import clientPromise from "@/lib/mongo";
import { ObjectId } from "mongodb";

export async function GET(request) {
    const cookiestore = await cookies()
    const token = cookiestore.get("accesstoken")
    const decoded = jwt.verify(token.value, process.env.ACCESS_TOKEN_SECRET)

    const id = decoded.sub
    const client = await clientPromise
    const db=await client.db("capusers")
    const collection=await db.collection("info")

    const skills=await collection.findOne({_id:new ObjectId(id)})

    console.log(skills)

    return Response.json({message:"query recieved"})
}