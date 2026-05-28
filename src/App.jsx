import Cursor   from "./components/Cursor";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Skills   from "./components/Skills";
import Training from "./components/Training";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}