import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      <Link to={"/"} className="flex my-auto font-bold text-primary">
        Ôn Thi Lý Thuyết
      </Link>
    </>
  );
};

export default Logo;
