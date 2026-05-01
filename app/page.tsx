import Navbar from "@/components/Navbar";
import ScrollStage from "@/components/ScrollStage";
import Preloader from "../components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="relative">
        <ScrollStage />
      </main>
      <footer className="fixed bottom-2 w-full text-center text-xs text-white/20 pointer-events-none mix-blend-difference z-50">
        SCROLL TO EXPLORE
      </footer>
    </>
  );
}
