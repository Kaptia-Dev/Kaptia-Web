"use client";

import SplitText from "@ui/SplitText";
import CustomButton from "@ui/CustomButton";

export default function Hero() {
  return (
    <>
      <section className="h-screen flex justify-center items-center flex-col md:flex-row">
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
      </section>
    </>
  );
}
