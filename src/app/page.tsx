import About from "./components/About";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";

export default function Home() {
  return (
    <main>
        <Header/>
        <Hero/>
        <About/>
    </main>
  );
}
