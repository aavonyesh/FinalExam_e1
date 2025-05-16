import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Basket from "./pages/Basket/Basket";
import Wishlist from "./pages/Wishlist/Wishlist";
import Shop from "./pages/Shop/Shop";
import NoPage from "./pages/NoPage/NoPage";
import Admin from "./pages/Admin/Admin";
import AdminAdd from "./pages/Admin/AdminAdd";
import Detail from "./pages/Detail/Detail";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="basket" element={<Basket/>} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shop" element={<Shop />} />
          <Route path="admin" element={<Admin />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="add" element={<AdminAdd />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
