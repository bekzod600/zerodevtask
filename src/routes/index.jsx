import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/Home";
import DebitView from "../views/Debit";
import KreditView from "../views/Kredit";
import LoginView from "../views/Login";
import SignUpView from "../views/signup";

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
  {
    path: "/signup",
    element: <SignUpView />,
  },
]);

export default router;
