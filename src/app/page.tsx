
import React from "react";  
import Services from "@/components/organisms/Services";
import Contact from "@/components/organisms/Contact";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Footer from "@/components/organisms/Footer";
export default function page() {
  return (
    <div>
     <About />
     <Services />
     <Hero />
     <Footer />
     <Contact />
    </div>
  );
}
