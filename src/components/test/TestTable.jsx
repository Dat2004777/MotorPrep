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
import { Button } from "../ui/button";

const TestTable = ({ exams, onDeleteTestClick }) => {
  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white shadow w-full p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-15 uppercase">STT</TableHead>
              <TableHead className="text-left uppercase">Tên đề thi</TableHead>
              <TableHead className="text-left uppercase">Câu hỏi</TableHead>
              <TableHead className="text-center uppercase">Hành động</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {exams.map((exam, index) => (
              <TableRow key={exam.id}>
                <TableCell className="w-15">{index + 1}</TableCell>
                <TableCell className="text-left whitespace-normal wrap-break-word">
                  {exam.title}
                </TableCell>
                <TableCell className="text-left">
                  {exam.questionIds.join(", ")}
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Link to={`/admin/tests/update/${exam.id}`}>
                    <Button variant="outline">Sửa</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => onDeleteTestClick(exam.id)}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter className="bg-slate-50/50 border-t border-slate-200">
            <TableRow>
              <TableCell
                colSpan={5}
                className="p-4 text-sm text-muted-foreground font-normal"
              >
                Hiển thị 1-5 trên tổng số 5 đề thi
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default TestTable;
