import type React from "react"
import type { Metadata } from "next"
// Removed next/font/google imports for non-Google fonts (Geist).
// We'll fall back to CSS variables defined in `styles/globals.css`.
import "./globals.css"
import { cn } from "@/lib/utils"
import { V0Provider } from "@/lib/context"
import dynamic from "next/dynamic"

const V0Setup = dynamic(() => import("@/components/v0-setup"))

// Font variables are provided via CSS fallbacks in `styles/globals.css`.

const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false

export const metadata: Metadata = {
  title: {
    template: "%s | Synecdoche®",
    default: "Synecdoche®",
  },
  description:
    "We stand at the forefront of a new era, where creativity meets technology to redefine what's possible. Our mission is to empower individuals and businesses alike with groundbreaking solutions that inspire change and drive progress.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* body uses CSS variable fallbacks for fonts (see styles/globals.css) */}
      <body className={cn()}>
        <V0Provider isV0={isV0}>
          {children}
          {isV0 && <V0Setup />}
        </V0Provider>
      </body>
    </html>
  )
}
