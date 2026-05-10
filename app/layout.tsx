import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "沐宠小院 | 宠物洗护点",
  description: "沐宠小院宠物洗护点，提供宠物洗护、基础美容、皮毛养护与接送到店服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
