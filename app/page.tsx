import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/Abou";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
    
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Footer />
    </main>
    
  );
}

