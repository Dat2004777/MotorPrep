import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router";

const HistoryPage = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-10">
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Lịch sử làm bài
              </CardTitle>
              <CardDescription>
                Xem lại các bài thi đã thực hiện và kết quả của bạn
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow w-full p-8 mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-15 uppercase">ID</TableHead>
                <TableHead className="text-center uppercase">
                  Ngày/ giờ thi
                </TableHead>
                <TableHead className="text-center uppercase">
                  Tên bộ đề
                </TableHead>
                <TableHead className="text-center uppercase">Điểm số</TableHead>
                <TableHead className="text-center uppercase">Kết quả</TableHead>
                <TableHead className="text-center uppercase">
                  Hành động
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="w-15">1</TableCell>
                <TableCell className="text-center">
                  25/06/2026 - 12:20
                </TableCell>
                <TableCell className="text-center">Đề thi số 1</TableCell>
                <TableCell className="text-center">7</TableCell>
                <TableCell className="text-center">Đạt</TableCell>
                <TableCell className="text-center">
                  <Button>Chi tiết</Button>
                </TableCell>
              </TableRow>
            </TableBody>

            <TableFooter className="bg-slate-50/50 border-t border-slate-200">
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="p-4 text-sm text-muted-foreground font-normal"
                >
                  Hiển thị 1-5 trên tổng số 10 lịch sử làm bài
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </main>
    </>
  );
};

export default HistoryPage;
