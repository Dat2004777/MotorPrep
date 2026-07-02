import examService from "@/services/examService";
import historyService from "@/services/historyService";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export default function useExam(usingPage) {
  const [exams, setExams] = useState([]);
  const [currentExam, setCurrentExam] = useState();

  const fetchExams = useCallback(async () => {
    try {
      const res = await examService.getAllExams();
      setExams(res);
    } catch (error) {
      console.log(`Lỗi fetchExams tại ${usingPage}: `, error);
      toast.error("Lỗi khi lấy danh sách đề thi");
    }
  }, [usingPage]);

  const fetchExamById = useCallback(
    async (examId) => {
      try {
        const res = await examService.getExamById(examId);
        setCurrentExam(res);
      } catch (error) {
        console.log(`Lỗi fetchExamById tại ${usingPage}: `, error);
        toast.error("Lỗi khi lấy thông tin đề thi");
      }
    },
    [usingPage],
  );

  const handleSubmitExam = useCallback(
    async (examData) => {
      try {
        const res = await historyService.saveHistory(examData);
        return res;
      } catch (error) {
        console.log(`Lỗi handleSubmitExam tại ${usingPage}: `, error);
        toast.error("Lỗi khi nộp bài thi");
      }
    },
    [usingPage],
  );

  const handleDeleteTest = useCallback(
    async (testId) => {
      try {
        await examService.deleteTest(testId);
        toast.success("Xóa đề thi thành công");
      } catch (error) {
        console.log(`Lỗi khi xóa đề thi tại ${usingPage}: `, error);
        toast.error("Lỗi khi xóa đề thi");
      }
    },
    [usingPage],
  );

  const handleUpdateTest = useCallback(
    async (testId, examData) => {
      try {
        await examService.updateTest(testId, examData);
        toast.success("Cập nhật đề thi thành công");
      } catch (error) {
        console.log(`Lỗi khi cập nhật đề thi tại ${usingPage}: `, error);
        toast.error("Lỗi cập nhật đề thi");
      }
    },
    [usingPage],
  );

  return {
    exams,
    currentExam,
    fetchExams,
    fetchExamById,
    handleSubmitExam,
    handleDeleteTest,
    handleUpdateTest,
  };
}
