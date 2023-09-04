import Main from "./layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Films";
import NotFound from "./pages/NotFound";
import FilmDetails from "./pages/FilmDetails";
import Auth from "./layout/Auth";
import Register from "./pages/Auth/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/films",
        element: (
          <PrivateRoute>
            <Films />
          </PrivateRoute>
        ),
      },
      {
        path: "/films/:filmId",
        element: <FilmDetails />,
      },
    ],
  },
  {
    path: "auth/",
    element: <Auth />,
    errorElement: <NotFound />,
    children: [
      {

        path: "register",
        element: <Register />,
      },
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/films",
      //   element: <Films />,
      // },

    ],
  },

]);




export default router;

