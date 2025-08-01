import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
})

export const metadata: Metadata = {
  title: "Barrio Abierto El Pinar",
  description: "Viví libre, cerca de la ciudad. Lotes de 950 m² en preventa.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={cn("antialiased", inter.variable, dmSerifDisplay.variable)}>{children}</body>
    </html>
  )
}
