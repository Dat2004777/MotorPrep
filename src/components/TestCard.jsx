import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "@/components/ui/button";

const TestCard = () => {
  return (
    <>
      <Card className="transition-all duration-250 hover:-translate-y-1.5">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <h2 className="text-xl font-semibold">Đề số 1</h2>
            <Badge>Chưa làm</Badge>
          </CardTitle>
          <CardDescription>
            Cấu trúc đề chuẩn 25 câu, thời gian 19 phút. Bao gồm các câu hỏi hay
            gặp.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full p-6">Bắt đầu làm bài</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TestCard;
