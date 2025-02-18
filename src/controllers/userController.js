import { usersDB as users } from "../db.js";

export const getUsers = (req, res) => {
  res.json(users);
};

export const createUser = (req, res) => {
  const { name, email, type, password } = req.body;

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ error: "El correo ya está registrado" });
  }

  users.push({ name, email, type, password });
  res.status(201).json({ message: "Usuario creado con éxito" });
};

export const deleteUser = (req, res) => {
  const { email } = req.params;
  const index = users.findIndex((user) => user.email === email);
  console.log(index);

  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  users.splice(index, 1);
  res.json({ message: "Usuario eliminado" });
};

export const updateUser = (req, res) => {
  const { email } = req.params;
  const { name, type, password } = req.body;

  const user = users.find((user) => user.email === email);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  if (name) user.name = name;
  if (type) user.type = type;
  if (password) user.password = password;

  res.json({ message: "Usuario actualizado", user });
};
