import classNames from "classnames";
import React, { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames("bg-white p-4 rounded shadow-md", className)}
  >
    {children}
  </div>
);

export default Card;
