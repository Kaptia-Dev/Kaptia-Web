"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import CustomButton from "@ui/CustomButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FEATURES = [
  {
    title: "CRM",
    description: "Gestiona clientes y oportunidades en un solo lugar",
  },
  {
    title: "Mapa interactivo de prospectos",
    description: "Visualiza clientes potenciales geolocalizados en tiempo real",
  },
  {
    title: "Agenda inteligente",
    description: "Organiza visitas y seguimientos de forma eficiente",
  },
  {
    title: "Herramientas especializadas de la industria",
    description: "Funcionalidades diseñadas para el sector agroindustrial",
  },
  {
    title: "Asistente virtual",
    description: "KaptiaBot analiza y prioriza prospectos por ti",
  },
];

export default function Product() {
  const [dashboardHeadingRef, dashboardHeadingVisible] = useScrollAnimation();
  const [dashboardImagesRef, dashboardImagesVisible] = useScrollAnimation();
  const [featuresHeadingRef, featuresHeadingVisible] = useScrollAnimation();
  const [featuresGridRef, featuresGridVisible] = useScrollAnimation();
  const [closingTextRef, closingTextVisible] = useScrollAnimation();
  const [closingCtaRef, closingCtaVisible] = useScrollAnimation();

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center px-5 lg:px-8 pt-24 pb-20 relative overflow-hidden text-center">
        <img
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[110vh] opacity-[0.06] pointer-events-none select-none"
          src="/images/figura_3.webp"
          alt=""
          aria-hidden="true"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-kaptia-primary-blue/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center gap-8 z-10 max-w-4xl w-full">
          <span className="border border-kaptia-secondary-blue/30 text-kaptia-secondary-blue text-xs font-semibold px-5 py-2 rounded-full bg-kaptia-secondary-blue/10 uppercase tracking-widest animate-slide-in-bottom">
            Plataforma de ventas inteligente
          </span>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white/60 font-black text-2xl md:text-3xl uppercase tracking-[0.3em] animate-slide-in-bottom animate-delay-100">
              Conoce a
            </h1>
            <img
              className="h-16 md:h-24 xl:h-28 animate-slide-in-bottom animate-delay-200"
              src="/logos/logoCombinado.webp"
              alt="Logo de Kaptia"
            />
          </div>

          <div className="w-16 h-1 bg-kaptia-yellow rounded-full animate-slide-in-bottom animate-delay-300" />

          <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl animate-slide-up-fade animate-delay-300">
            La plataforma inteligente de prospección y gestión comercial para
            equipos de ventas del sector agroindustrial.
          </p>

          <div className="flex flex-col gap-4 items-center animate-slide-up-fade animate-delay-400">
            <CustomButton
              text="Solicitar demo"
              primaryColor="bg-kaptia-yellow"
              secondaryColor="bg-white"
              textColor="text-kaptia-primary-blue"
              onClick={() => (window.location.href = "#contacto")}
            />
            <button
              className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-300 cursor-pointer underline underline-offset-4"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver funcionalidades
            </button>
          </div>
        </div>
      </section>

      <section
        data-navtheme="light"
        className="bg-white py-20 md:py-28 px-5 lg:px-8 flex flex-col items-center gap-14 border-t-4 border-kaptia-yellow"
      >
        <div
          ref={dashboardHeadingRef}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span
            className={`text-kaptia-primary-blue font-semibold text-sm uppercase tracking-[0.2em] ${dashboardHeadingVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
          >
            Plataforma
          </span>
          <h2
            className={`text-kaptia-primary-blue font-black text-4xl md:text-5xl xl:text-6xl max-w-2xl leading-tight ${dashboardHeadingVisible ? "animate-slide-in-bottom animate-delay-100" : "opacity-0"}`}
          >
            Todo lo que tu equipo necesita
          </h2>
        </div>

        <div
          ref={dashboardImagesRef}
          className="flex flex-col lg:flex-row gap-6 xl:gap-10 items-center justify-center w-full max-w-6xl"
        >
          <img
            className={`w-full sm:w-4/5 lg:w-3/5 rounded-2xl shadow-2xl ${dashboardImagesVisible ? "animate-slide-in-left" : "opacity-0"}`}
            src="/images/figura_8.webp"
            alt="Dashboard de Kaptia con mapa de prospectos"
          />
        </div>
      </section>

      <section
        className="py-20 md:py-28 px-5 lg:px-8 flex flex-col items-center gap-14 border-t-4 border-kaptia-yellow"
        id="features"
      >
        <div
          ref={featuresHeadingRef}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span
            className={`text-kaptia-secondary-blue font-semibold text-sm uppercase tracking-[0.2em] ${featuresHeadingVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
          >
            Funcionalidades
          </span>
          <h2
            className={`text-white font-black text-4xl md:text-5xl xl:text-6xl ${featuresHeadingVisible ? "animate-slide-in-bottom animate-delay-100" : "opacity-0"}`}
          >
            ¿Qué incluye Kaptia?
          </h2>
        </div>

        <ul
          ref={featuresGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full max-w-5xl"
        >
          {FEATURES.map((feature, idx) => (
            <li
              key={idx}
              style={{ animationDelay: `${idx * 120}ms` }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 hover:border-kaptia-secondary-blue/40 transition-colors duration-300 ${featuresGridVisible ? "animate-slide-up-fade" : "opacity-0"}`}
            >
              <CheckCircleIcon className="size-10 text-kaptia-secondary-blue shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-lg leading-snug">
                  {feature.title}
                </span>
                <span className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        data-navtheme="light"
        className="bg-white py-20 md:py-28 px-5 lg:px-8 flex flex-col justify-center items-center gap-14 border-t-4 border-kaptia-yellow"
      >
        <div ref={closingTextRef} className="flex flex-col gap-2">
          <span
            className={`text-kaptia-yellow text-4xl md:text-6xl lg:text-7xl text-center font-extrabold ${closingTextVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            Tareas que hoy te toman horas
          </span>
          <span
            className={`text-kaptia-primary-blue text-4xl md:text-6xl lg:text-7xl text-center font-light ${closingTextVisible ? "animate-slide-in-right animate-delay-100" : "opacity-0"}`}
          >
            con KAPTIA
          </span>
          <span
            className={`text-kaptia-primary-blue text-4xl md:text-6xl lg:text-7xl text-center font-extrabold ${closingTextVisible ? "animate-slide-in-left animate-delay-200" : "opacity-0"}`}
          >
            te llevará segundos
          </span>
        </div>
        <div
          ref={closingCtaRef}
          className="flex flex-col justify-center items-center gap-4"
        >
          <p
            className={`font-light text-2xl md:text-4xl ${closingCtaVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
          >
            ¿Quieres descubir cómo?
          </p>
          <CustomButton
            text="SOLICITAR DEMO"
            primaryColor="bg-kaptia-primary-blue"
            secondaryColor="bg-kaptia-yellow"
            textColor="text-white hover:text-kaptia-primary-blue"
          />
        </div>
      </section>
    </>
  );
}
