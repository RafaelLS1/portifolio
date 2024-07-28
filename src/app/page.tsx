import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import ProjectCards from "./components/Cards/projectCards";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#393E46]">
      <Header/>
      <div className="container mt-24 mx-auto px-12 py-4">
        
        <HeroSection/>
        <ProjectCards />
        <About/>

      </div>
      <Footer/>
    </main>



  );
}
