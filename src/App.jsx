import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Company from "./components/Company";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Statistic from "./components/Statistic";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Statistic />
              <Company />
              <Destination />
              <News />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
