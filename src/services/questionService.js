import axios from "axios";

const questionService = {
  getAllQuestions: async () => {
    try {
      const res = await axios.get(`http://localhost:3000/questions/`);
      return res.data;
    } catch (error) {
      console.error("Lỗi getAllQuestions tại questionService: ", error);
      throw error;
    }
  },
};

export default questionService;
