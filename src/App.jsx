import "./index.css";
import useLocoScroll from "./hooks/useLocoScroll";
import Home from "./components/Home/Home";
import Navbar from './components/Navbar/Navbar';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

const App = () => {
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPosition.x}px`;
      cursorRef.current.style.top = `${cursorPosition.y}px`;
    }
  }, [cursorPosition]);

  return (
    <>
      <div className='cursor' ref={cursorRef}></div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
