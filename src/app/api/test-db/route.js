import { MongoClient } from "mongodb";

export async function GET() {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        await client.db("skillsphere").command({ ping: 1 });
        await client.close();
        return Response.json({ status: "MongoDB connected successfully" });
    } catch (error) {
        return Response.json({ status: "Connection failed", error: error.message }, { status: 500 });
    }
}