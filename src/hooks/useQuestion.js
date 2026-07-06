import { categoryData } from "@/lib/data";
import questionService from "@/services/questionService";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export default function useQuestion(usingPage) {
  const [questions, setQuestions] = useState([]);

  const [categories, setCategories] = useState([]);
  const [questionContent, setQuestionContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCritical, setIsCritical] = useState(false);

  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const fetchQuestions = useCallback(async () => {
    try {
      const questionsData = await questionService.getAllQuestions();
      setQuestions(questionsData);
    } catch (error) {
      console.log(`Lỗi khi tải câu hỏi tại ${usingPage}: `, error);
      toast.error("Lỗi khi tải câu hỏi");
    }
  }, [usingPage]);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await questionService.getAllCategories();
      const data = res;
      setCategories(data);
    } catch (error) {
      console.log(`Lỗi khi lấy categories tại ${usingPage}: `, error);
      toast.error("Lỗi khi lấy categories");
    }
  }, [usingPage]);

  const fetchQuestionById = useCallback(
    async (questionId) => {
      try {
        const res = await questionService.getQuestionById(questionId);
        if (res) {
          setQuestionContent(res.questionText);
          setSelectedCategory(res.category);
          setIsCritical(res.isCritical);
          setOptionA(res.options.A);
          setOptionB(res.options.B);
          setOptionC(res.options.C);
          setOptionD(res.options.D);
          setCorrectOption(res.correctOption);
        }
      } catch (error) {
        console.log(
          `Lỗi khi tải câu hỏi ID ${questionId} tại ${usingPage}: `,
          error,
        );
        toast.error("Lỗi khi tải câu hỏi");
      }
    },
    [usingPage],
  );

  const handleDeleteQuestion = useCallback(
    async (questionId) => {
      try {
        const result = await questionService.deleteQuestion(questionId);

        if (result) {
          toast.success("Xóa câu hỏi thành công");
        }
      } catch (error) {
        console.log(`Lỗi khi xóa câu hỏi tại ${usingPage}: `, error);
        toast.error("Lỗi khi xóa câu hỏi");
      }
    },
    [usingPage],
  );

  const handleSetQuestionContent = (questionContent) => {
    setQuestionContent(questionContent);
  };

  const handleSetCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const handleSetCritical = (isCritical) => {
    setIsCritical(isCritical);
  };

  const handleSetOptionA = (optionA) => {
    setOptionA(optionA);
  };

  const handleSetOptionB = (optionB) => {
    setOptionB(optionB);
  };

  const handleSetOptionC = (optionC) => {
    setOptionC(optionC);
  };

  const handleSetOptionD = (optionD) => {
    setOptionD(optionD);
  };

  const handleAddAnswer = useCallback(async () => {
    const questionData = {
      questionText: questionContent,
      category:
        Object.keys(categoryData).find(
          (key) => categoryData[key] === selectedCategory,
        ) || selectedCategory,
      isCritical: isCritical,
      options: {
        A: optionA,
        B: optionB,
        C: optionC,
        D: optionD,
      },
      correctOption: correctOption,
    };

    try {
      const result = await questionService.addQuestion(questionData);
      if (result) {
        toast.success("Thêm câu hỏi thành công");
      }
    } catch (error) {
      console.log(`Lỗi khi thêm câu hỏi tại ${usingPage}: `, error);
      toast.error("Lỗi khi thêm câu hỏi");
    }
  }, [
    usingPage,
    questionContent,
    selectedCategory,
    isCritical,
    optionA,
    optionB,
    optionC,
    optionD,
    correctOption,
  ]);

  const handleUpdateQuestion = useCallback(
    async (questionId) => {
      const questionData = {
        questionText: questionContent,
        category:
          Object.keys(categoryData).find(
            (key) => categoryData[key] === selectedCategory,
          ) || selectedCategory,
        isCritical: isCritical,
        options: {
          A: optionA,
          B: optionB,
          C: optionC,
          D: optionD,
        },
        correctOption: correctOption,
      };

      try {
        const result = await questionService.updateQuestion(
          questionId,
          questionData,
        );
        if (result) {
          toast.success("Cập nhật câu hỏi thành công");
        }
      } catch (error) {
        console.log(`Lỗi khi cập nhật câu hỏi tại ${usingPage}: `, error);
        toast.error("Lỗi khi cập nhật câu hỏi");
      }
    },
    [
      usingPage,
      questionContent,
      selectedCategory,
      isCritical,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption,
    ],
  );

  return {
    questions,
    categories,
    questionContent,
    selectedCategory,
    isCritical,
    optionA,
    optionB,
    optionC,
    optionD,
    correctOption,
    setCorrectOption,
    fetchQuestions,
    fetchCategories,
    fetchQuestionById,
    handleDeleteQuestion,
    handleAddAnswer,
    handleSetQuestionContent,
    handleSetCategory,
    handleSetCritical,
    handleSetOptionA,
    handleSetOptionB,
    handleSetOptionC,
    handleSetOptionD,
    handleUpdateQuestion,
  };
}
