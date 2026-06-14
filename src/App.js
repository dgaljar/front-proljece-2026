import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./componenets/Footer";
import Nav from "./componenets/Nav";

import Naslovnica from "./pages/Naslovnica";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Kontakt from "./pages/Kontakt";
import Usluge from "./pages/Usluge"
import BlogSingle from "./componenets/BlogSingle";

import Katalog from "./pages/Shop/Katalog";
import Product from "./pages/Shop/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Naslovnica/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/usluge" element={<Usluge/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blogSingle" element={<BlogSingle />} />
          <Route path="/kontakt" element={<Kontakt/>} />




          <Route path="/katalog" element={<Katalog />} />
          <Route path="/proizvod/:id" element={<Product />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
