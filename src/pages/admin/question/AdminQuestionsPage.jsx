import AdminSidebar from "@/components/layouts/AdminSidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import QuestionTable from "@/components/question/QuestionTable";
import useQuestion from "@/hooks/useQuestion";
import CommonPagination from "@/components/CommonPagination";
import usePagination from "@/hooks/usePagination";

const AdminQuestionsPage = () => {
  const { questions, fetchQuestions, handleDeleteQuestion } =
    useQuestion("AdminQuestionsPage");

  const {
    page,
    totalPages,
    visibleData,
    handlePrev,
    handleNext,
    handlePageChange,
  } = usePagination(questions);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return (
    <>
      <SidebarProvider>
        {/* <SidebarTrigger className="p-2 border rounded-lg hover:bg-slate-100 transition-colors shadow-sm" />{" "} */}
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

          <div className="flex mt-8 items-center justify-end">
            <Link to={"/admin/questions/create"}>
              <Button>
                <Plus />
                Thêm câu hỏi mới
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <QuestionTable
              questions={visibleData}
              onDeleteClick={handleDeleteQuestion}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <CommonPagination
              page={page}
              totalPages={totalPages}
              onClickPrev={handlePrev}
              onClickNext={handleNext}
              onClickPageChange={handlePageChange}
            />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminQuestionsPage;
