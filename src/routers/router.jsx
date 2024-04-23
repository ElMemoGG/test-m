import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import RequireAuth from "./RequireAuth";
import Error from "../pages/error";
import Menu from "../layout/menu";
import Create from "../pages/create";
import Login from "../pages/login";

const Router = () => {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "",
      element: <Menu />,
      errorElement: <Error />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
            path: "",
            element: <RequireAuth />,
            errorElement: <Error />,
            children: [
                {
                    path: "create",
                    element: <Create />,
                  },
            ]
        },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default Router;
