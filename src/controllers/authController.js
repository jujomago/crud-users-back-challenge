import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { usersDB as users } from "../db.js";

dotenv.config();

export const login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) return res.status(401).json({ error: "Credenciales incorrectas" });

  const token = jwt.sign(
    { email: user.email, type: user.type },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
};
