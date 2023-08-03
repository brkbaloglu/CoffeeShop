import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Coffee from './pages/Coffee'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Products from './pages/Products'
import Contact from './pages/Contact'
function App() {
  return (
    <div className="bg-black text-white">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="coffee" element={<Coffee/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
