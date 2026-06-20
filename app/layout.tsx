import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { dark, shadcn } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ExecOS - AI Executive Assistant",
  description: "Your autonomous AI assistant for email and calendar management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body
          className={`${montserrat.className} antialiased`}
        >
          {children}
          <footer className="footer-wrapper">
            <div className="section-heading">
              <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} ExecOS.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}