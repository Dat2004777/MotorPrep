import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import userService from "@/services/userService";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const users = await userService.login({ username });

      if (users.length === 0) {
        toast.error("Tên đăng nhập hoặc mật khẩu không chính xác");
        return;
      }

      if (users[0].password !== password) {
        toast.error("Tên đăng nhập hoặc mật khẩu không chính xác");
        return;
      }

      login(users[0]);
      toast.success("Đăng nhập thành công");

      navigate("/");
    } catch (error) {
      console.log("Lỗi khi đăng nhập tại LoginPage: ", error);
      toast.error("Lỗi khi đăng nhập");
    }
  };

  return (
    <>
      <div className="my-auto text-center mt-16">
        <h1 className="text-2xl font-bold text-primary">Ôn Thi Lý Thuyết</h1>
        <p className="text-muted-foreground">
          Hệ thống học và thi bằng lái xe chuyên nghiệp
        </p>
      </div>

      <div className="flex flex-col justify-center mx-auto w-96 mt-8">
        <form onSubmit={handleLogin}>
          <Card>
            <CardHeader>
              <CardTitle>Đăng nhập</CardTitle>
              <CardContent className="flex flex-col gap-4 mt-4">
                <div>
                  <p>Tên đăng nhập</p>
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nhập tên đăng nhập..."
                    className="mt-2"
                  />
                </div>

                <div>
                  <p>Mật khẩu</p>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    type="password"
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="p-6">
                  Đăng nhập
                </Button>
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
