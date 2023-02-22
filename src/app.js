import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./components/about";
import Profile from "./components/profileClass";
import Error from "./components/error";
import Contact from "./components/contact";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";

//CHUNKING
//LAZY LOADING
//ON DEMAND LOADING
//DYNAMIC IMPORT 

const Instamart = lazy(()=> import("./components/Instamart"));
 //on demand loading -> upon render -> suspend loading ->
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
        //Nested routing used here
        children: [
          {
            path: "profile",
            element: <Profile/>,
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu/>,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
        ),
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
