import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

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
        element: <h1>Groups</h1>,
      },
      {
        path: "/profile/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            h
          </Suspense>
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
