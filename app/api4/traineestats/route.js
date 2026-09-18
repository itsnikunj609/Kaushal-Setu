import { Cookie } from "next/font/google";
import jwt from"jsonwebtoken";
import clientPromise from "@/lib/mongo";

export async function GET(request){
    const cookiestore=await cookies()
    const token= cookiestore.get("accesstoken")
    if(!token){
        return Response.json({message:"unauthorized access"})
    }
    const decoded= jwt.verify(token.value,process.env.ACCESS_TOKEN_SECRET)

    const id=decoded.sub
    const client=await clientPromise;
    const db=await client.db("capusers")
 
}