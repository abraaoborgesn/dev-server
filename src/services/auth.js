import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => {
  return bcrypt.hash(password, 8);
};

export const checkPassword = (user, password) =>
  bcrypt.compare(password, user.password); // compara a senha do usuario no banco de dados com a senha mandada
