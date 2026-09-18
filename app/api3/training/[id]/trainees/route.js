import { cookies } from "next/headers"
 import jwt from "jsonwebtoken"
import clientPromise from "@/lib/mongo"
import { ObjectId } from "mongodb"

export async function GET(request,{params}){
    const {id}= await params
    const cookiestore=await cookies()
    const token= cookiestore.get("accesstoken")
    if(!token){
        return Response.json({message:"unauthorized access"})
    }
    const decode=jwt.verify(token.value,process.env.ACCESS_TOKEN_SECRET)
    const trainerid=decode.sub

    const client=await clientPromise;
    const db=await client.db("capusers");
    const collection=await db.collection("training")

    const training=await collection.findOne({trainerid:trainerid,_id:new ObjectId(id)})
    if ( !training) {
    return Response.json({ message: "Training not found or unauthorized" })
}
    const enrollmentcollection=await db.collection("enrollment")
    const trainees=await enrollmentcollection.find({trainingid:id}).toArray()

    return Response.json(trainees)
}