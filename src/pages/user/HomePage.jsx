import Header from "@/components/layouts/Header";
import TestCard from "@/components/TestCard";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-10">
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Chế độ ôn luyện
              </CardTitle>
              <CardDescription>
                {" "}
                Chọn bộ đề để bắt đầu thi thử hoặc ôn tập theo cấu trúc chuẩn
                của Bộ GTVT
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-8">
          <div className="border-b pb-2">
            <ul className="flex gap-4">
              <li>Đề Thi Theo Bộ</li>
              <li>Đề Thi Ngẫu Nhiên</li>
              <li>Học Theo Chương</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-4">
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
