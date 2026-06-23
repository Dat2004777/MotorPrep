import AdminSidebar from "@/components/layouts/AdminSidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import QuestionContent from "@/components/question/QuestionContent";
import QuestionAnswer from "@/components/question/QuestionAnswer";
import QuestionFilter from "@/components/question/QuestionFilter";

const AdminQuestionCreatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SidebarProvider>
        <AdminSidebar />

        <main className="w-full grow p-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Tạo câu hỏi mới
                </CardTitle>
                <CardDescription>
                  Thêm câu hỏi mới vào trong ngân hàng đề thi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="p-8 rounded-xl border border-slate-200 bg-white shadow mt-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="flex flex-col gap-8 col-span-8">
                <div>
                  <QuestionContent />
                </div>
                <div>
                  <QuestionAnswer />
                </div>
              </div>

              <div className="col-span-4">
                <QuestionFilter />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <Button
                onClick={() => navigate("/admin/questions")}
                variant="outline"
              >
                Hủy
              </Button>
              <Button variant="default">Lưu</Button>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminQuestionCreatePage;
