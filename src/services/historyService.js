import api from "@/lib/axios";

const historyService = {
  saveHistory: async (historyData) => {
    const {
      studentId,
      examIdRef,
      examTitle,
      date,
      score,
      totalQuestions,
      isPassed,
      failedOnCritical,
      userAnswers,
    } = historyData;
    try {
      const res = await api.post("/histories/", {
        studentId,
        examIdRef,
        examTitle,
        date,
        score,
        totalQuestions,
        isPassed,
        failedOnCritical,
        userAnswers,
      });
      return res.data;
    } catch (error) {
      console.log("Lỗi saveHistory tại historyService: ", error);
      throw error;
    }
  },

  getHistoryByUserId: async (userId) => {
    try {
      const res = await api.get(`/histories?studentId=${userId}`);
      return res.data;
    } catch (error) {
      console.log("Lỗi getHistoryByUser tại historyService: ", error);
      throw error;
    }
  },

  getHistoryById: async (historyId) => {
    try {
      const res = await api.get(`/histories/${historyId}`);
      return res.data;
    } catch (error) {
      console.log("Lỗi getHistoryById tại historyService: ", error);
      throw error;
    }
  },
};

export default historyService;
