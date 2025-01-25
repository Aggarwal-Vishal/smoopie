import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Login from "./ui/Login";
import SignUp from "./ui/SignUp";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
