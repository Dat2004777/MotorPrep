import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../Logo";
import User from "../User";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { UserIcon } from "lucide-react";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex justify-between p-4 shadow-md">
      <Logo />

      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Open
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-62.5">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Điều hướng</DropdownMenuLabel>
              <DropdownMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : ""
                  }
                >
                  Trang chủ
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  to="/history"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : ""
                  }
                >
                  Lịch sử
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
              {user === null ? (
                <>
                  <DropdownMenuItem>
                    <Link className="w-full" to={"/login"}>
                      <Button className="w-full" variant="ghost">
                        Đăng nhập
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className="w-full" to={"/register"}>
                      <Button className="w-full">Đăng ký</Button>
                    </Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem>
                    {user.role === "admin" ? (
                      <Link to={"/admin/questions"}>
                        <Button variant="ghost">
                          <UserIcon className="my-auto" />
                          <p className="my-auto">
                            {user.name} ({user.role})
                          </p>
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="ghost">
                        <UserIcon className="my-auto" />
                        <p className="my-auto">
                          {user.name} ({user.role})
                        </p>
                      </Button>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      className="w-full"
                      variant="destructive"
                      onClick={handleLogoutClick}
                    >
                      Đăng xuất
                    </Button>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden md:flex my-auto">
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary pb-1" : ""
              }
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary pb-1" : ""
              }
            >
              Lịch sử
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex my-auto gap-4">
        {user === null ? (
          <>
            <Link to={"/login"}>
              <Button variant="ghost">Đăng nhập</Button>
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
