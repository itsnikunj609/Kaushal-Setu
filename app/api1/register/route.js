import clientPromise from "@/lib/mongo"
import bcrypt from "bcrypt";

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    let db = await client.db("capusers");
    let collection = await db.collection("info")

    //checking if user exists or not
    const user = await collection.findOne({ email: body.email })
    if (user) {
        return Response.json({ message: "user already exists" });
    }

    const hashed = await bcrypt.hash(body.password, 10)
        
    const result = await collection.insertOne({
        fullname: body.fullname,
        username: body.username,
        email: body.email,
        password: hashed,
        role:body.role
    })
    if (result) {
        return Response.json({ message: "form submitted" })
    }

     return Response.json({ success: true, error: false, message: "request reached" })
    


}