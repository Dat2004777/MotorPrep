import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/layouts/AdminSidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import TestTable from "@/components/test/TestTable";
import useExam from "@/hooks/useExam";
import { useEffect } from "react";

const AdminTestsPage = () => {
  const { exams, fetchExams, handleDeleteTest } = useExam("AdminTestsPage");

  useEffect(() => {
    fetchExams();
  }, [fetchExams]);

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
                  Quản lý bộ đề thi
                </CardTitle>
                <CardDescription>Quản lý bộ đề thi ôn thi GPLX</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex mt-8 items-center justify-end">
            <Link to={"/admin/tests/create"}>
              <Button>
                <Plus />
                Thêm bộ đề mới
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <TestTable exams={exams} onDeleteTestClick={handleDeleteTest} />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default AdminTestsPage;
