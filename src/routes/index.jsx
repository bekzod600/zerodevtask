import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/Home";
import DebitView from "../views/Debit";
import KreditView from "../views/Kredit";
import LoginView from "../views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/debit",
    element: <DebitView />,
  },
  {
    path: "/kredit",
    element: <KreditView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);

export default router;
