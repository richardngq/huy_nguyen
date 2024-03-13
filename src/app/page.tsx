import About from "@/components/About";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="text-white flex flex-col h-auto">
      <Navbar />
      <div className="p-3 lg:p-6">
        <div className="">
          <About />
        </div>
      </div>
    </div>
  );
}
