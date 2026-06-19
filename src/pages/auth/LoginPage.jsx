import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="my-auto text-center mt-16">
        <h1 className="text-2xl font-bold text-primary">Ôn Thi Lý Thuyết</h1>
        <p className="text-muted-foreground">
          Hệ thống học và thi bằng lái xe chuyên nghiệp
        </p>
      </div>

      <div className="flex flex-col justify-center mx-auto w-96 mt-8">
        <form action="">
          <Card>
            <CardHeader>
              <CardTitle>Đăng nhập</CardTitle>
              <CardContent className="flex flex-col gap-4 mt-4">
                <div>
                  <p>Tên đăng nhập</p>
                  <Input placeholder="Nhập tên đăng nhập..." className="mt-2" />
                </div>

                <div>
                  <p>Mật khẩu</p>
                  <Input
                    placeholder="Nhập mật khẩu..."
                    type="password"
                    className="mt-2"
                  />
                </div>

                <Button className="p-6">Đăng nhập</Button>
              </CardContent>
            </CardHeader>
          </Card>
        </form>

        <div className="flex justify-between mt-8">
          <div>
            <Link to="/">Quay lại trang chủ</Link>
          </div>
          <div>
            Chưa có tài khoản?{" "}
            <Link to="/register">
              <span className="text-primary">Đăng ký</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
