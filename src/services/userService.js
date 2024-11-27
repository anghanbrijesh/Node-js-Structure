// In a real application, this would interact with a database
const users = new Map();

exports.getAllUsers = async () => {
  return Array.from(users.values());
};

exports.getUserById = async (id) => {
  return users.get(id);
};

exports.createUser = async (userData) => {
  const id = Date.now().toString();
  const user = { id, ...userData };
  users.set(id, user);
  return user;
};

exports.updateUser = async (id, userData) => {
  const user = users.get(id);
  if (!user) return null;
  
  const updatedUser = { ...user, ...userData };
  users.set(id, updatedUser);
  return updatedUser;
};

exports.deleteUser = async (id) => {
  users.delete(id);
};