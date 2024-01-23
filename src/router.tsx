import { createBrowserRouter } from "react-router-dom";
import { LoginPage, MainPage } from "./ui/pages";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/main", element: <MainPage /> },
]);

export default router;
