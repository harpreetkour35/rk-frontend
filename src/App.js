import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import { Header } from "./components/Header";
import CartProvider from "./cartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="collections" element={<Collections />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
