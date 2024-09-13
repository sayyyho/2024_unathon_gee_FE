import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import AlarmListPage from "./pages/alarmlist/AlarmListPage";
import { LuckyEnd, LuckyWaiting } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
