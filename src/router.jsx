import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { LuckyWaiting, LuckyEnd, Main } from "./pages";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/lucky/waiting",
        element: <LuckyWaiting />,
      },
      {
        path: "/lucky/end",
        element: <LuckyEnd />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
