import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Item from "./pages/Items"
import Navbar from "./components/Navbar";
import ItemsDetails from "./pages/ItemsDetails";
import ErrorPage from "./pages/ErrorPage";
function App() {
  // const routs = createRoutesFromElements(
  //   <>
  //   <Route path="/" element={<Home />} />
  //   <Route path="/about" element={<About />} />
  //   <Route path="/item" element={<Item />} />
  //   </>
  // );

  // const router = createBrowserRouter(routs);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        
        {
          path: 'items',
          
          children:[
            {index: true, element:<Item/>},
            {
              path: ':id',
              element: <ItemsDetails />
            }
          ]
        }
      ],
    },
  ]);

  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;
