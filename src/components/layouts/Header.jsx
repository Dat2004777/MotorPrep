import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Header = () => {
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
        <Link to={"/login"}>
          <Button variant="outline">Đăng nhập</Button>
        </Link>
        <Link to={"/register"}>
          <Button>Đăng ký</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
