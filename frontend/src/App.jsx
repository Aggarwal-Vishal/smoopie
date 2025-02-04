import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Login from "./ui/Login";
import SignUp from "./ui/SignUp";
import AddRecipie from "./ui/AddRecipie";
import Recipie from "./ui/Recipie";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/add-recipie",
    element: <AddRecipie />,
  },
  {
    path: "/recipie/:id",
    element: <Recipie />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
