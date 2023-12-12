import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import { Header } from "./components/Header";
import ShopContextProvider from "./context/ShopContext";
import { FooterWithSocialLinks } from "./components/Footer";

const App = () => {
  return (
    <ShopContextProvider>
      <div className="App min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="collections" element={<Collections />} />
        </Routes>
        <FooterWithSocialLinks />
      </div>
    </ShopContextProvider>
  );
};

export default App;
