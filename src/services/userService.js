import axios from "axios";

const userService = {
  getAllUsers: async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/`);
      return res.data;
    } catch (error) {
      console.error("Lỗi getAllUsers tại userService: ", error);
    }
  },

  login: async (username) => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${username}`);
      return res.data;
    } catch (error) {
      console.error("Lỗi login tại userService: ", error);
    }
  },

  register: async (newUser) => {
    const { id, name, username, password, role } = newUser;

    try {
      const res = await axios.post(`http://localhost:3000/users/`, {
        id,
        name,
        username,
        password,
        role,
      });
      return res.data;
    } catch (error) {
      console.error("Lỗi register tại userService: ", error);
    }
  },
};

export default userService;
