import AdminSidebar from "@/components/layouts/AdminSidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import questionService from "@/services/questionService";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import QuestionTable from "@/components/question/QuestionTable";
import { toast } from "sonner";

const AdminQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const questionsData = await questionService.getAllQuestions();
    setQuestions(questionsData);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleDeleteQuestion = async (questionId) => {
    try {
      const result = await questionService.deleteQuestion(questionId);

      if (result) {
        toast.success("Xóa câu hỏi thành công");
      }
    } catch (error) {
      console.log("Lỗi khi xóa câu hỏi tại AdminQuestionCreatePage: ", error);
      toast.error;
      ("Lỗi khi xóa câu hỏi");
    }
  };

  return (
    <>
      <SidebarProvider>
        <AdminSidebar />

        <main className="w-full grow p-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Quản lý câu hỏi
                </CardTitle>
                <CardDescription>
                  Quản lý ngân hàng câu hỏi ôn thi GPLX
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-end mt-8">
            <Link to={"/admin/questions/create"}>
              <Button>
                <Plus />
                Thêm câu hỏi mới
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <QuestionTable
              questions={questions}
              onDeleteClick={handleDeleteQuestion}
            />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminQuestionsPage;
