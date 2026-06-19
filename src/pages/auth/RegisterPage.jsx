import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
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
              <CardTitle>Đăng ký</CardTitle>
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

                <div>
                  <p>Xác nhận mật khẩu</p>
                  <Input
                    placeholder="Xác nhận lại mật khẩu..."
                    type="password"
                    className="mt-2"
                  />
                </div>

                <Button className="p-6">Đăng ký</Button>
              </CardContent>
            </CardHeader>
          </Card>
        </form>

        <div className="flex justify-between mt-8">
          <div>
            <Link to="/">Quay lại trang chủ</Link>
          </div>
          <div>
            Đã có tài khoản?{" "}
            <Link to="/login">
              <span className="text-primary">Đăng nhập</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
