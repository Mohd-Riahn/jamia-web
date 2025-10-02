
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import About from "./pages/About";
import Departments from "./pages/Departments";
import Administration from "./pages/Administration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => (

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/administration" element={<Administration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>

        <Footer />
      </BrowserRouter>

);

export default App;
