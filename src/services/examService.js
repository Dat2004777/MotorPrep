import api from "@/lib/axios";

const examService = {
  getAllExams: async () => {
    try {
      const res = await api.get("/exams");
      return res.data;
    } catch (error) {
      console.log("Lỗi getAllExams tại examService: ", error);
      throw error;
    }
  },

  getExamById: async (id) => {
    try {
      const res = await api.get(`/exams/${id}`);
      return res.data;
    } catch (error) {
      console.log("Lỗi getExamById tại examService: ", error);
      throw error;
    }
  },

  createTest: async (examData) => {
    const { title, questionIds } = examData;
    try {
      const res = await api.post("/exams", { title, questionIds });
      return res.data;
    } catch (error) {
      console.log("Lỗi createTest tại examService: ", error);
      throw error;
    }
  },

  updateTest: async (testId, examData) => {
    const { title, questionIds } = examData;
    try {
      const res = await api.put(`/exams/${testId}`, { title, questionIds });
      return res.data;
    } catch (error) {
      console.log("Lỗi updateTest tại examService: ", error);
      throw error;
    }
  },

  deleteTest: async (testId) => {
    try {
      const res = await api.delete(`/exams/${testId}`);
      return res.data;
    } catch (error) {
      console.log("Lỗi deleteTest tại examService: ", error);
      throw error;
    }
  },
};

export default examService;
