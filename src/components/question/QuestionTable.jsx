import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { categoryData } from "@/lib/data";
import { Checkbox } from "../ui/checkbox";

const QuestionTable = ({
  questions,
  onDeleteClick,
  isSelectionMode = false,
  selectedIds = [],
  onToggleSelect,
}) => {
  const questionLength = questions.length;

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white shadow w-full p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-15 uppercase">STT</TableHead>
              <TableHead className="max-w-62.5 uppercase">
                Nội dung câu hỏi
              </TableHead>
              <TableHead className="text-center uppercase">Danh mục</TableHead>
              <TableHead className="text-center uppercase">Phân Loại</TableHead>
              <TableHead className="text-center uppercase">
                {isSelectionMode ? "Chọn" : "Hành động"}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {questions.map((question, index) => {
              const isChecked = selectedIds.includes(question.id);
              return (
                <TableRow
                  key={question.id}
                  className={
                    isChecked && isSelectionMode ? "bg-slate-50/80" : ""
                  }
                >
                  <TableCell className="w-15">{index + 1}</TableCell>
                  <TableCell className="max-w-62.5 whitespace-normal wrap-break-word text-justify">
                    {question.questionText}
                  </TableCell>
                  <TableCell className="text-center">
                    {categoryData[question.category]}
                  </TableCell>
                  <TableCell className="text-center">
                    {question.isCritical ? "Điểm liệt" : "Thường"}
                  </TableCell>
                  <TableCell className="text-center">
                    {isSelectionMode ? (
                      <div className="flex justify-center items-center hover:cursor-pointer">
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={() => onToggleSelect(question.id)}
                          className="w-5 h-5 rounded-md"
                        />
                      </div>
                    ) : (
                      <div className="flex gap-2 justify-center">
                        <Link to={`/admin/questions/update/${question.id}`}>
                          <Button variant="outline">Sửa</Button>
                        </Link>
                        <Button
                          variant="destructive"
                          onClick={() => onDeleteClick(question.id)}
                        >
                          Xóa
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>

          <TableFooter className="bg-slate-50/50 border-t border-slate-200">
            <TableRow>
              <TableCell
                colSpan={5}
                className="p-4 text-sm text-muted-foreground font-normal"
              >
                {isSelectionMode ? (
                  <span>
                    Đã chọn:{" "}
                    <strong className="text-primary">
                      {selectedIds.length}
                    </strong>{" "}
                    / 10 câu hỏi
                  </span>
                ) : (
                  <span>
                    Hiển thị 1 - {questionLength} trên tổng số {questionLength}{" "}
                    câu hỏi
                  </span>
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default QuestionTable;
