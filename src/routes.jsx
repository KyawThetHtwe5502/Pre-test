import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import NotFound from "./components/NotFound";
import ListPage from "./features/list/pages/ListPage";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "list",
        element: <ListPage />,
      },
    ],
  },
]);

export default routes;
