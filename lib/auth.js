import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import { ObjectId } from "mongodb";
import clientPromise from "./mongo";
export async function getcurrentuser() {
    const cookiestore = await cookies();
    const token = cookiestore.get("accesstoken")
    if (!token) {
        return null
    }
    let decoded;

    try {
        decoded = jwt.verify(
            token.value,
            process.env.ACCESS_TOKEN_SECRET
        );
    } catch (error) {
        return null;
    }
    const id = new ObjectId(decoded.sub)

    let client = await clientPromise;
    let db = await client.db("capusers");
    let collection = await db.collection("info");

    let user = await collection.findOne({ _id: id })
    if(!user){
        return null;
    }

    return user;




}