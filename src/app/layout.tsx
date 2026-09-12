import type { Metadata } from "next";
import { StoreProvider } from "@/providers/store-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "LangChain Web",
  description: "A full-stack Next.js application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
