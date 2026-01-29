import "./globals.css";

export const metadata = {
  title: "Kaptia",
  description:
    "Plataforma de gestión y captación de clientes para el sector agroindustrial.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
