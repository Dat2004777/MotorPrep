import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { User as UserIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";

const User = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
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

      <Button variant="destructive" onClick={handleLogoutClick}>
        Đăng xuất
      </Button>
    </>
  );
};

export default User;
