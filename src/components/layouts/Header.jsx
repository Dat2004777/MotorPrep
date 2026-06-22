import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router";
import Logo from "../Logo";
import User from "../User";

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-between p-4 shadow-md">
      <Logo />

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
          <User />
        )}
      </div>
    </div>
  );
};

export default Header;
