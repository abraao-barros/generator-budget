import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerador de Orçamentos | Desenvolvimento Web Profissional",
  description:
    "Sistema completo para geração de propostas comerciais e orçamentos para projetos de desenvolvimento web, landing pages, e-commerces e sites institucionais. Crie PDFs profissionais em minutos.",
  keywords: [
    "orçamento",
    "desenvolvimento web",
    "proposta comercial",
    "landing page",
    "e-commerce",
    "site institucional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

