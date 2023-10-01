import Main from "./layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import TVShow from "./pages/TVShow";
import NotFound from "./pages/NotFound";
import FilmDetails from "./pages/FilmDetails";
import Auth from "./layout/Auth";
import Register from "./pages/Auth/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ActorProfile from "./pages/ActorProfile";


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
        path: "/tvshows",
        element: (
          <PrivateRoute>
            <TVShow />
          </PrivateRoute>
        ),
      },
      {
        path: "/films/:filmId",
        element: <FilmDetails />,
      },
      {
        path: "/actor/:actorId",
        element: <ActorProfile />,
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

      // {
      //   path: "/films",
      //   element: <Films />,
      // },

    ],
  },

]);




export default router;

