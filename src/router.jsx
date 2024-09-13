import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import AlarmListPage from "./pages/alarmlist/AlarmListPage";
import { LuckyEnd, LuckyWaiting } from "./pages";
import Modal_fix from "./components/AlarmList/Modal_fix";
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
      {
        path: "/AlarmListPage",
        element: <AlarmListPage />,
      },
      {
        path: "/ModalTest",
        element: <Modal_fix />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
