import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import AlarmListPage from "./pages/alarmlist/AlarmListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/AlarmListPage", element: <AlarmListPage/> },
      //   {
      //     path: "/login",
      //     element: <Login />,
      //   },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
