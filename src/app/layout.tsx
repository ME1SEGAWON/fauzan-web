import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mak Udin Store - The Premium CFD Experience",
  description:
    "Kesegaran Es Teh Jumbo & Keseruan Selfie di CFD Depok. Satu destinasi premium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased selection:bg-gray-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
