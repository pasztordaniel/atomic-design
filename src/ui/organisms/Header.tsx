import React from "react";
import { Button } from "../molecules";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white px-10 py-2 shadow-md">
      <div className="flex flex-row justify-between">
        <Link to="/main">
          <img
            src="/vite.svg"
            alt="Atomic design"
            className="w-8 h-auto block"
          />
        </Link>

        <Button leftIcon="account" onClick={() => navigate("/")}>
          Log out
        </Button>
      </div>
    </header>
  );
};

export default Header;
