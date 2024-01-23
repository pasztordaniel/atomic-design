import React, { ComponentProps, PropsWithChildren } from "react";
import { Footer, Header, SidebarList } from "../organisms";

const sidebarList: ComponentProps<typeof SidebarList>["list"] = [
  {
    to: "/",
    children: "Menu item 01",
    icon: "account",
  },
  {
    to: "/",
    children: "Menu item 02",
    icon: "account",
  },
  {
    to: "/",
    children: "Menu item 03",
    icon: "account",
  },
  {
    to: "/",
    children: "Menu item 04",
    icon: "account",
  },
  {
    to: "/",
    children: "Menu item 05",
    icon: "account",
  },
  {
    to: "/",
    children: "Menu item 06",
    icon: "account",
  },
];

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-slate-200 min-h-screen flex flex-col">
    <Header />
    <div className="px-10 py-8 flex-1 flex flex-row gap-6">
      <SidebarList list={sidebarList} />
      <div className="flex-1">{children}</div>
    </div>
    <Footer />
  </div>
);

export default MainLayout;
