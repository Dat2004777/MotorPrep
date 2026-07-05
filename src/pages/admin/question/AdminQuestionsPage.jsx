import AdminSidebar from "@/components/layouts/AdminSidebar";
import {
  Card,
  CardContent,
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryData } from "@/lib/data";
import useQuestionFilter from "@/hooks/useQuestionFilter";

const AdminQuestionsPage = () => {
  const { questions, fetchQuestions, handleDeleteQuestion } =
    useQuestion("AdminQuestionsPage");

  const {
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    typeFilter,
    setTypeFilter,
    filteredQuestions,
  } = useQuestionFilter(questions);

  const {
    page,
    setPage,
    totalPages,
    visibleData,
    handlePrev,
    handleNext,
    handlePageChange,
  } = usePagination(filteredQuestions);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  useEffect(() => {
    if (setPage) {
      setPage(1);
    }
  }, [searchTerm, categoryFilter, typeFilter, setPage]);

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

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardContent className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="flex gap-2">
                      <p className="flex my-auto">Nội dung câu hỏi: </p>
                      <div>
                        <Input
                          placeholder="Tìm kiếm..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="flex my-auto">Danh mục: </p>
                      <div>
                        <Select
                          value={categoryFilter}
                          onValueChange={setCategoryFilter}
                        >
                          <SelectTrigger className="w-45">
                            <SelectValue placeholder="Chọn danh mục" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={categoryData.all}>
                              {categoryData.all}
                            </SelectItem>
                            <SelectItem value={categoryData.concepts}>
                              {categoryData.concepts}
                            </SelectItem>
                            <SelectItem value={categoryData.signs}>
                              {categoryData.signs}
                            </SelectItem>
                            <SelectItem value={categoryData.shapes}>
                              {categoryData.shapes}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="flex my-auto">Phân loại: </p>
                      <div>
                        <Select
                          value={typeFilter}
                          onValueChange={setTypeFilter}
                        >
                          <SelectTrigger className="w-45">
                            <SelectValue placeholder="Chọn loại câu hỏi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={categoryData.all}>
                              {categoryData.all}
                            </SelectItem>
                            <SelectItem value={categoryData.isCritical}>
                              {categoryData.isCritical}
                            </SelectItem>
                            <SelectItem value={categoryData.normal}>
                              {categoryData.normal}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link to={"/admin/questions/create"}>
                      <Button>
                        <Plus />
                        Thêm câu hỏi mới
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
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
