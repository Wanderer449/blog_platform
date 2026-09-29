import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/auth", auth);
app.use("/api/posts", posts);

async function start() {
	let mongoUri = process.env.MONGO_URI;

	if (!mongoUri) {
		if (process.env.NODE_ENV === "production") {
			throw new Error("MONGO_URI is required in production");
		}

		const { MongoMemoryServer } = await import("mongodb-memory-server");
		const memoryServer = await MongoMemoryServer.create();
		mongoUri = memoryServer.getUri();
		console.warn("MONGO_URI is not set; using temporary in-memory MongoDB.");
	}

	await mongoose.connect(mongoUri);
	app.listen(port, () => console.log(`API listening on port ${port}`));
}

start().catch((error) => {
	console.error(error);
	process.exit(1);
});