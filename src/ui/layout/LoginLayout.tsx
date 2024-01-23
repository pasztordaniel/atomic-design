import React, { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const LoginLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => (
  <div
    {...rest}
    className="w-screen h-screen flex items-center justify-center bg-slate-200"
  >
    {children}
  </div>
);

export default LoginLayout;
