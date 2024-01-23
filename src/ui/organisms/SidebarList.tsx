import React, { ComponentProps } from "react";
import SidebarItem from "../molecules/SidebarItem";

interface Props {
  list: ComponentProps<typeof SidebarItem>[];
}

const SidebarList: React.FC<Props> = ({ list }) => (
  <div className="bg-white p-1 rounded-md self-start shadow-sm sticky top-10 left-0">
    <ul className="space-y-px">
      {list.map((item) => (
        <li>
          <SidebarItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarList;
