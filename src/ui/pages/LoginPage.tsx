import React from "react";
import { LoginLayout } from "../layout";
import { Card, Heading, Icon } from "../atoms";
import { Button, TextInputControl } from "../molecules";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <LoginLayout>
      <Card>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center">
            <Icon name="account" className="w-8 h-8 text-slate-400" />
            <Heading>Sign in</Heading>
          </div>
          <div className="flex flex-col gap-4">
            <TextInputControl label="E-mail" />
            <TextInputControl label="Password" type="password" />
            <Button onClick={() => navigate("/main")}>Login</Button>
            <Button variant="secondary">Register</Button>
          </div>
        </div>
      </Card>
    </LoginLayout>
  );
};

export default LoginPage;
