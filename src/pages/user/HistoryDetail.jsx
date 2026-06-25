import ExamAnswerItem from "@/components/exam/ExamAnswerItem";
import ExamHeader from "@/components/layouts/ExamHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useHistory from "@/hooks/useHistory";
import useQuestion from "@/hooks/useQuestion";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const HistoryDetail = () => {
  const { historyId } = useParams();

  const { currentHistory, fetchHistoryById } = useHistory("historyDetail");
  const { questions, fetchQuestions } = useQuestion("historyDetail");

  useEffect(() => {
    fetchHistoryById(historyId);
    fetchQuestions();
  }, [fetchQuestions, fetchHistoryById, historyId]);

  const targetQuestionIds =
    currentHistory?.userAnswers?.map((ans) => ans.questionId) || [];

  const examQuestions =
    questions.length > 0 && targetQuestionIds.length > 0
      ? questions.filter((q) => targetQuestionIds.includes(q.id))
      : [];

  if (examQuestions.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center text-muted-foreground">
        Đang tải chi tiết bài làm...
      </div>
    );
  }

  return (
    <>
      <ExamHeader />

      <main className="container mx-auto px-10 mt-8 max-w-4xl">
        <h2 className="text-xl font-bold mb-6 text-slate-800">
          Chi tiết kết quả: {currentHistory?.examTitle}
        </h2>

        {/* 🟩 VÒNG LẶP LỚN: Render toàn bộ danh sách câu hỏi tuôn từ trên xuống dưới */}
        <div className="flex flex-col gap-6 mb-10">
          {examQuestions.map((question, index) => {
            // Tìm xem bản ghi lịch sử (log) của riêng câu hỏi vòng lặp hiện tại
            const historyLogOfQuestion = currentHistory?.userAnswers?.find(
              (ans) => ans.questionId === question.id,
            );

            const userSelectedAnswer = historyLogOfQuestion?.selected || "";

            return (
              <Card key={question.id} className="w-full shadow-sm">
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2 font-semibold">
                    <span>
                      Câu hỏi {index + 1}/{examQuestions.length}
                    </span>

                    {/* Badge hiển thị Trạng thái Đúng/Sai của riêng câu này */}
                    {historyLogOfQuestion?.isCorrect ? (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded text-xs font-bold">
                        Làm đúng
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-bold">
                        Làm sai
                      </span>
                    )}
                  </CardDescription>
                  <CardTitle className="text-lg font-bold leading-snug mt-1">
                    {question.questionText}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Khóa click chọn bằng pointer-events-none */}
                  <div className="flex flex-col gap-2 pointer-events-none opacity-90">
                    {Object.entries(question?.options || {}).map(
                      ([key, value]) => {
                        const isUserPicked = userSelectedAnswer === key;

                        return (
                          <div key={key} className="relative">
                            <ExamAnswerItem
                              text={value}
                              isSelected={isUserPicked}
                            />

                            {/* Đánh dấu nhãn ĐÁP ÁN ĐÚNG chuẩn của hệ thống */}
                            {key === question.correctOption && (
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                                Đáp án đúng
                              </span>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default HistoryDetail;
