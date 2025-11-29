import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import BlogsPage from "../views/Blogs";
import HomePage from "../views/Home";
import LoginPage from "../views/auth/Login";
import RegisterPage from "../views/auth/Register";
import AddBlogPage from "../views/AddBlog";
import MyBlogs from "../views/MyBlogs";
import BlogDetail from "../views/BlogDetail";
import EditBlog from "../views/EditBlog";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children:[
      {
        path:'',
        element:<HomePage />
      },
      {
        path:'blogs',
        element: <Outlet />,
    children:[
      {
        path:'',
        element:<BlogsPage />,
      },
      {
        path:':id',
        element:<BlogDetail />,
      },
      {
        path:'me',
        element:<MyBlogs />,
      },
      {
        path:'add',
        element:<AddBlogPage />,
      },
      {
        path:'edit/:id',
        element:<EditBlog />,
      },
    ]
      },
    ],
  },
  {
    path: "auth",
    element: <Outlet />,
    children:[
      {
        path:'login',
        element:<LoginPage />
      },
      {
        path:'register',
        element:<RegisterPage />
      },
    ],
  },
]);
const MainRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default MainRoutes;
