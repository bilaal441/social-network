import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <h1>404 Page Not Found</h1>,
      },

      {
        path: "/groups",
        element: (
          path: "/", element: <component={App} /> 
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <PrivateRoute>
            <h1> profile</h1>
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
