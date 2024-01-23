import React from "react";
import MainLayout from "../layout/MainLayout";
import { ProductList, Welcome } from "../molecules";

const MainPage: React.FC = () => (
  <MainLayout>
    <div className="space-y-10">
      <Welcome />
      <ProductList />
    </div>
  </MainLayout>
);

export default MainPage;
