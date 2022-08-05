import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialUIform from "../MaterialUIform";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function Routerdom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<MaterialUIform />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/Loginpage" element={<MaterialUIform />} />
          <Route path="/Loginpages" element={<MaterialUIform />} />
          <Route path="*" element={<MaterialUIform />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
