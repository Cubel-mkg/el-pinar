"use client"

import type React from "react"
import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement

      if (link) {
        e.preventDefault()
        const href = link.getAttribute("href")

        if (href === "#") {
          // Si es solo "#", ir al top de la página
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        } else if (href && href.startsWith("#")) {
          // Si tiene un ID específico, ir a esa sección
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)

          if (targetElement) {
            const headerHeight = 100
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return <>{children}</>
}
