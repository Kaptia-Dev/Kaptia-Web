"use client";
import { useEffect, useState } from "react";
import CustomButton from "@ui/CustomButton";
import NavLink from "@ui/NavLink";

import { Bars3Icon, BarsArrowUpIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        scrolled ? "pt-5" : ""
      }`}
    >
      {/* Desktop Navbar */}
      <div
        className={`w-full transition-all duration-300 hidden lg:flex ${
          scrolled ? "px-8" : ""
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
              className="w-42 h-auto transition-all duration-300"
              src="./logos/logoCombinado.webp"
              alt="Logo de Kaptia"
            />
          </button>
          <ul
            className={`flex flex-1 justify-center items-center transition-all duration-300 ${scrolled ? "lg:gap-8 xl:gap-16" : "lg:gap-14 xl:gap-24"}`}
          >
            {NAVLINKS.map((link, idx) => (
              <NavLink text={link.name} href={link.href} idx={idx} key={idx} animation="animate-slide-up-fade" />
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
        className={`w-full lg:hidden duration-300 transition-all flex flex-col ${scrolled ? "px-5 gap-5" : "gap-0"}`}
      >
        <nav
          className={`w-full flex justify-between items-center px-5 transition-all duration-300 backdrop-blur-[6px]  ${scrolled ? "rounded-full py-5 shadow-xl bg-kaptia-secondary-blue/50" : "py-8 bg-transparent"}`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0 })}
            className="cursor-pointer animate-slide-up-fade"
            aria-label="Ir al inicio"
          >
            <img
              className="w-32 h-auto transition-all duration-300"
              src="./logos/logoCombinado.webp"
              alt="Logo de Kaptia"
            />
          </button>
          <button
            className="animate-slide-up-fade animate-delay-100 transition-transform duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <span
              className="inline-block transition-transform duration-300"
              style={{
                transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              {menuOpen ? (
                <BarsArrowUpIcon className="text-white size-10 cursor-pointer hover:text-kaptia-yellow transition-colors duration-300" />
              ) : (
                <Bars3Icon className="text-white size-10 cursor-pointer hover:text-kaptia-yellow transition-colors duration-300" />
              )}
            </span>
          </button>
        </nav>
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            menuOpen
              ? "animate-slide-in-top pointer-events-auto"
              : "hidden pointer-events-none"
          }`}
        >
          <div
            className={`p-5 backdrop-blur-[6px] transition-all duration-500 ${scrolled ? "bg-kaptia-yellow/70 rounded-2xl shadow-2xl" : "bg-kaptia-yellow/80"}`}
          >
            <ul className="flex flex-col gap-4 text-center">
              {NAVLINKS.map((linl, idx) => (
                <NavLink
                  text={linl.name}
                  href={linl.href}
                  idx={idx}
                  key={idx}
                  animation={"animate-fade-in-down"}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
