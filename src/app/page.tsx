import About from "./components/About";
import Facilities from "./components/Facilities";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <Hero />
      <About />
      <div className="relative bg-white h-[150px]">
          <div className="mask"></div>
      </div>
      <Facilities />
    </main>
  );
}
