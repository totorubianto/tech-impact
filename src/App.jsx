import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Levels from "./components/Levels";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
        <Navbar />
        <Hero />
        <About />
        <Certifications />
        <Levels />
        <WhyChooseUs />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
