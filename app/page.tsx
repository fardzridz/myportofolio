import Navbar from "@/components/Navbar";
import ScrollStage from "@/components/ScrollStage";
import Preloader from "../components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <div className="relative">
        <ScrollStage />
      </div>

    </>
  );
}
