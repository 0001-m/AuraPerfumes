import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { Suspense } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "AURA PERFUMES - Luxury Fragrances",
  description: "Discover your signature scent with AURA PERFUMES premium collection",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico", // make sure this exists in /public
    shortcut: "/favicon.png", // optional extra
    apple: "/apple-touch-icon.png", // for iOS home screen
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-source ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" />}>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
