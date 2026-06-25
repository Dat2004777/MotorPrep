import { TableOfContents } from "lucide-react";
import { Input } from "../ui/input";

const TestContent = ({ examTitle, setExamTitle }) => {
  return (
    <>
      <div className="flex gap-2 items-center px-1">
        <TableOfContents className="text-primary" size={16} />
        <p>Tiêu đề đề thi</p>
      </div>
      <div className="mt-4">
        <Input
          value={examTitle}
          onChange={(e) => setExamTitle(e.target.value)}
          type="text"
        />
      </div>
    </>
  );
};

export default TestContent;
