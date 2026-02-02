import Hero from "@/sections/Hero";

export const metadata = {
  title: "Kaptia",
  description:
    "Impulsa la transformación digital de tu equipo comercial con Kaptia, la solución integral para la gestión de ventas y el aumento de la productividad.",
};

export default function Home() {
  return (
    <main className="bg-kaptia-primary-blue h-[200vh] px-5 lg:px-8">
      <Hero />
    </main>
  );
}
