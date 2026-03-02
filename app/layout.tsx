import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Script from "next/script"

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
      <head>
        <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9CNKNWG');</script>
<!-- End Google Tag Manager -->
  
        {/* Google Ads / Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17630532537"
          strategy="afterInteractive"
        />

        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17630532537');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Barrio Abierto El Pinar",
              "url": "https://www.barrioelpinar.com",
              "logo": "https://www.barrioelpinar.com/logo.png",
              "description": "",
              "sameAs": [
                "https://www.facebook.com/barrioelpinar",
                "https://www.instagram.com/barrioelpinar"
              ]
            }),
          }}
        />
      </head>
      <body className={cn("antialiased", inter.variable, dmSerifDisplay.variable)}>{children}
</body>
    </html>
  )
}
