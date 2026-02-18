"use client";

import SplitText from "@ui/SplitText";
import CustomButton from "@ui/CustomButton";
import DownButton from "@ui/DownButton";

export default function Hero() {
  return (
    <>
      <section className="h-screen flex justify-center items-center flex-col md:flex-row relative">
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          <SplitText
            text="Encuentra a tus clientes antes que tu competencia"
            className="text-white font-black text-5xl md:text-7xl lg:text-8xl"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
            showCallback
          />
          <p className="text-white text-2xl animate-fade-in-right">
            Kaptia es una plataforma inteligente para equipos de ventas que
            combina prospección geolocalizada, CRM y seguimiento con
            inteligencia artificial.
          </p>
          <div>
            <CustomButton
              text="Solicitar demo"
              primaryColor="bg-kaptia-yellow"
              secondaryColor="bg-white"
              animate="animate-slide-up-fade animate-delay-[360ms]"
              onClick={() => (window.location.href = "#contacto")}
            />
          </div>
        </div>
        <div className="hidden md:w-1/3 md:block">
          <img
            className="animate-fade-in-left"
            src="./images/figura_1.webp"
            alt=""
          />
        </div>
        <DownButton />
      </section>
      <section className="h-screen flex flex-col items-center justify-center gap-24 md:gap-16">
        <div className="flex flex-col justify-center items-center gap-24 md:gap-16">
          <img
            className="h-32 animate-slide-in-top"
            src="./images/figura_7.webp"
            alt="Figura 7"
          />
          <p className="text-3xl md:text-5xl text-white font-extralight text-center w-3/4 md:w-2/4 lg:w-2/3 animate-slide-in-top">
            La prospección es la{" "}
            <strong className="font-extrabold text-4xl md:text-6xl">2°</strong>{" "}
            actividad que{" "}
            <span className="uppercase font-bold text-secondary-blue-300">
              más tiempo consume
            </span>
            <span className="uppercase font-bold text-yellow-400">
              {" "}
              en el proceso de ventas
            </span>
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center md:w-4/5">
          <p className="font-extralight text-2xl md:text-4xl lg:text-5xl text-white w-3/4 text-center md:text-start">
            Menos del{" "}
            <strong className="font-extrabold text-secondary-blue-300 text-4xl md:text-6xl">
              2%
            </strong>{" "}
            de las empresas productoras en{" "}
            <span className="font-bold text-yellow-400">México</span>
            <span className="font-bold text-secondary-blue-300">
              {" "}
              utilizan plataformas digitales{" "}
            </span>
            <span className="font-bold text-yellow-400">
              para gestión comercial
            </span>
          </p>
          <img className="h-72 hidden md:flex" src="./images/figura_6.webp" alt="" />
        </div>
      </section>
    </>
  );
}
