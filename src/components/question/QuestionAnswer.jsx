import { ListChecks } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const QuestionAnswer = () => {
  const [options, setOptions] = useState({
    A: "Chỉ được phép thực hiện với xe",
    B: "Không được phép.",
    C: "Được phép tùy từng trường hợp",
    D: "Chỉ được phép với xe mô tô hai",
  });

  const [correctOption, setCorrectOption] = useState("");

  const handleOptionTextChange = (key, value) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <div>
        <Card className="w-full rounded-xl p-6">
          <CardContent className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <ListChecks className="text-primary" size={16} />
              <p className="font-semibold text-lg">Các đáp án</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(options).map(([key, value]) => {
                const isSelected = correctOption === key;

                return (
                  <div key={key} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-sm font-medium text-muted-foreground">
                        Đáp án {key}
                      </span>
                      <Input
                        type="radio"
                        name="correct-answer"
                        checked={isSelected}
                        onChange={() => setCorrectOption(key)}
                        className="w-4 h-4 focus:ring-primary cursor-pointer"
                      />
                    </div>

                    <div
                      className={`flex items-center rounded-xl border overflow-hidden transition-all duration-200 bg-white shadow-sm ${
                        isSelected
                          ? "border-primary ring-2 ring-primary/10"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center font-bold text-sm shrink-0 transition-colors duration-200 ${
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-muted-foreground border-r border-slate-200"
                        }`}
                      >
                        {key}
                      </div>

                      <Input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          handleOptionTextChange(key, e.target.value)
                        }
                        className="border-0 focus-visible:ring-0 text-sm px-4"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <hr className="border-slate-200/60 my-1" /> */}

            {/* <div className="flex flex-col gap-2.5">
              <p className="text-sm font-medium text-muted-foreground">
                Hoặc chọn Đáp án đúng từ danh sách
              </p>
              <div className="inline-flex items-center bg-white border border-slate-200 rounded-xl px-4 py-2.5 w-fit shadow-sm font-medium text-sm">
                Đáp án {correctOption}{" "}
                <span className="text-muted-foreground ml-1">(Đang chọn)</span>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default QuestionAnswer;
