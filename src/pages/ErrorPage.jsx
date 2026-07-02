import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary tracking-widest animate-bounce">
          404
        </h1>

        <div className="bg-amber-400 px-3 py-1 text-sm rounded rotate-12 absolute font-medium inline-block -mt-4 ml-24 select-none">
          Không tìm thấy trang!
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          Ối! Đường dẫn này không tồn tại
        </h2>

        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Có vẻ như bạn đã gõ sai địa chỉ URL hoặc trang này đã bị di chuyển đi
          nơi khác rồi.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="px-6 py-3 font-semibold transition duration-300 transform"
          >
            Quay lại
          </Button>

          <Button
            onClick={() => navigate("/")}
            className="px-6 py-3 text-white font-semibold transition duration-300 transform"
          >
            Trang Chủ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
