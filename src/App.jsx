import { Routes, Route } from "react-router-dom";

import HomePages from "./pages/HomePages.jsx";
import FaqPages from "./pages/FaqPages";
import TestimonialPages from "./pages/TestimonialPages";
import SyaratKetenPages from "./pages/SyaratKetenPages";
import KelasPages from "./pages/KelasPages";
import NavbarComponents from "./Components/NavbarComponents.jsx";
import FooterComponents from "./Components/FooterComponents.jsx";

function App() {
    return (
      <div>
        <NavbarComponents />

        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/Faq" element={<FaqPages />} />
          <Route path="/Testimonial" element={<TestimonialPages />} />
          <Route path="/Syarat" element={<SyaratKetenPages />} />
          <Route path="/Kelas" element={<KelasPages />} />
        </Routes>

        {/* <FooterComponents /> */}
      </div>
    )
}

export default App;
