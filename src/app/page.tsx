"use client"
import About from "@/components/About";
import { Work } from "@/components/Work";
import Pattern from '@/assets/img/pattern.png';
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative p-3 lg:p-6 overflow-hidden h-full flex flex-col justify-center">
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Image src={Pattern} alt='' className="absolute right-0 top-0" data-aos="fade-in" />
      <About />
      <Work />
    </div>
  );
}
