import AdminSidebar from "@/components/layouts/AdminSidebar";
import QuestionTable from "@/components/QuestionTable";
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

const AdminQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const questionsData = await questionService.getAllQuestions();
    setQuestions(questionsData);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

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
            <Button>
              <Plus />
              Thêm câu hỏi mới
            </Button>
          </div>

          <div className="mt-8">
            <QuestionTable questions={questions} />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminQuestionsPage;
