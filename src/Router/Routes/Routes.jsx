import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blogs/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import TakeReview from "../../Pages/TakeReview/TakeReview";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/services/:id",
        element: <TakeReview />,
        loader: ({ params }) =>
          fetch(
            `https://dream-vally-services-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: <MyReviews />,
      },
      {
        path: "/addService",
        element: <AddService />,
      },
      {
        path: "/update/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(
            `https://dream-vally-services-server.vercel.app/reviews/${params.id}`
          ),
      },
    ],
  },
]);
