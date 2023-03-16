const User = require("./db/shema");

const UserContorllers = async () => {
  return await User.find();
};

const FindUserController = async (id) => {
  return await User.findById(id);
};

const CreateUserController = async (body) => {
  return await User.create(body);
};

module.exports = {
  UserContorllers,
  FindUserController,
  CreateUserController,
};
