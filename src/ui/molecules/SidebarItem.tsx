import React, { ComponentProps, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../atoms";

interface Props extends ComponentProps<typeof Link> {
  icon?: ComponentProps<typeof Icon>["name"];
}

const SidebarItem: React.FC<PropsWithChildren<Props>> = ({
  icon,
  children,
  ...rest
}) => (
  <Link
    {...rest}
    className="flex flex-row gap-4 items-center bg-transparent hover:bg-slate-100 px-2 py-1 transition-all"
  >
    {icon && <Icon name={icon} className="w-6" />}
    {children}
  </Link>
);

export default SidebarItem;
