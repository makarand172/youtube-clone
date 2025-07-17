import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header";
import HomePage from "./pages/homepage/HomePage";
import Watch from "./pages/watch/Watch";
import MainContainer from "./components/mainContainer/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>Something went wrong!.....</h1>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        errorElement: <h1>Something went wrong!.....</h1>,
      },
      {
        path: "/watch",
        element: <Watch />,
        errorElement: <h1>Something went wrong!.....</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
