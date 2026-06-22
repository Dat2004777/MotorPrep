import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { User } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between p-4 shadow-md">
      <Link to={"/"} className="flex my-auto font-bold text-primary">
        Ôn Thi Lý Thuyết
      </Link>

      <div className="flex my-auto">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/history">Lịch sử</Link>
          </li>
        </ul>
      </div>

      <div className="flex my-auto gap-4">
        {user === null ? (
          <>
            <Link to={"/login"}>
              <Button variant="outline">Đăng nhập</Button>
            </Link>
            <Link to={"/register"}>
              <Button>Đăng ký</Button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/admin"}>
              <Button variant="ghost">
                <User className="my-auto" />
                <p className="my-auto">
                  {user.name} ({user.role})
                </p>
              </Button>
            </Link>
            <Button variant="destructive" onClick={logout}>
              Đăng xuất
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
