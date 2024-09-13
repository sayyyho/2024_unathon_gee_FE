import App from "./App";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //   {
      //     path: "/login",
      //     element: <Login />,
      //   },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
