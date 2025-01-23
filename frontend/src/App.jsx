import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./ui/Navbar";
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
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
