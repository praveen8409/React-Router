import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Item from "./pages/Items"
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
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/items", element: <Item /> },

  ]);

  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;
