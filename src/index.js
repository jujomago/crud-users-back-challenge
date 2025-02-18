import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { corsMiddleware } from "./middlewares/cors.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(corsMiddleware());
const PORT = process.env.PORT || 5000;

// Rutas
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
);
