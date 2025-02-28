import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';
import { connectDB } from "./Config/DB.js";

import productRoutes from "./Routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use(cors({
	origin: 'http://localhost:5175', // Allow requests from this origin
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
	credentials: true, // Allow cookies and credentials
  }));
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/Frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
//