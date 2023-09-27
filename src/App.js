import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Item from "./pages/Items"
function App() {

  const[page, setPage] = useState("Home");
  return <>
<Navbar setPage={setPage} />
  {page === "home" && <Home />}
  {page === "about" && <About />}
  {page === "item" && <Item />}

  </>;
}

export default App;
