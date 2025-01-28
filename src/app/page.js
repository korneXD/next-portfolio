import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Seo from "./components/seo";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 scroll-smooth py-10">
      <Navbar />
      <div className="flex h-screen w-fit items-center justify-center gap-10">
        <div className="h-[400px] w-[400px] rounded-full border"></div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-primary w-full text-center font-nohemiLight text-2xl uppercase tracking-wider">
            Halmosi Kornél
          </h1>
          <p className="text-primary text-center font-nohemiLight text-xl tracking-wide">
            2 éve foglalkozom weboldal készítéssel, <br />
            illetve kisebb Full-Stack weboldalak készítésével.
          </p>
        </div>
      </div>
      <Services />
      <Seo />
      <Projects />
      <Footer />
    </div>
  );
}
