"use client";
import { useEffect, useState } from "react";
import CustomButton from "@ui/CustomButton";
import NavLink from "@ui/NavLink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAVLINKS = [
    { name: "Inicio", href: "/" },
    { name: "Producto", href: "/producto" },
    { name: "Early Partners", href: "/partners" },
    { name: "Nosotros", href: "/team" },
  ];

  return (
    <header
      className={`fixed flex justify-center items-center w-full z-50 transition-all duration-300 ${
        scrolled ? "pt-5" : "md:pt-8"
      }`}
    >
      {/* Desktop Navbar */}
      <div
        className={`w-full transition-all duration-300 hidden lg:flex ${
          scrolled ? "px-8" : "px-15"
        }`}
      >
        <nav
          className={`w-full flex justify-between items-center px-5 transition-all duration-300 backdrop-blur-[6px] bg-kaptia-secondary-blue/50 ${scrolled ? "rounded-full py-5 shadow-xl" : "py-8 bg-transparent"}`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0 })}
            className="cursor-pointer animate-slide-up-fade"
            aria-label="Ir al inicio"
          >
            <img
              className="h-10 transition-all duration-300"
              src="./logos/logoCombinado.webp"
              alt="Logo de Kaptia"
            />
          </button>
          <ul
            className={`flex flex-1 justify-center items-center transition-all duration-300 ${scrolled ? "lg:gap-8 xl:gap-16" : "lg:gap-14 xl:gap-24"}`}
          >
            {NAVLINKS.map((link, idx) => (
              <NavLink text={link.name} href={link.href} idx={idx} key={idx} />
            ))}
          </ul>
          <CustomButton
            text="Contacto"
            animate="animate-slide-up-fade animate-delay-[360ms]"
            onClick={() => (window.location.href = "#contacto")}
          />
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`w-full md:hidden duration-300 transition-all ${scrolled ? "px-5" : ""}`}
      ></div>
    </header>
  );
}
