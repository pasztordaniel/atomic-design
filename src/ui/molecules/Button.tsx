import classNames from "classnames";
import React, {
  ButtonHTMLAttributes,
  ComponentProps,
  PropsWithChildren,
} from "react";
import { Icon } from "../atoms";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  leftIcon?: ComponentProps<typeof Icon>["name"];
  rightIcon?: ComponentProps<typeof Icon>["name"];
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  variant = "primary",
  leftIcon,
  rightIcon,
  children,
  type = "button",
  className,
  ...rest
}) => (
  <button
    type={type}
    {...rest}
    className={classNames(
      "transition-all text-lg px-4 py-1",
      {
        "bg-slate-500 text-white rounded shadow-sm hover:bg-slate-600":
          variant === "primary",
        "bg-white border border-current border-1 text-slate-500 rounded shadow-sm":
          variant === "secondary",
      },
      className
    )}
  >
    <div className="flex flex-row gap-2 items-center justify-center">
      {leftIcon && <Icon name={leftIcon} className="w-6" />}
      {children}
      {rightIcon && <Icon name={rightIcon} className="w-6" />}
    </div>
  </button>
);

export default Button;
