export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-kaptia-dark text-white text-center">
        Navbar Placeholder
      </nav>

      <section className="flex flex-col items-center justify-center h-[80vh] text-center p-4">
        <h1 className="text-5xl font-bold text-kaptia-dark mb-4">
          Bienvenido a <span className="text-kaptia-lime">Kaptia</span>
        </h1>
        <p className="text-xl text-gray-600">
          Transformación digital para equipos de ventas B2B.
        </p>
      </section>
    </main>
  );
}
