"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hoverScale?: number
}

export function AnimatedCard({ children, className = "", delay = 0, hoverScale = 1.02 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileHover={{
        scale: hoverScale,
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      <Card className="h-full border-brand-clay/20 hover:shadow-lg transition-shadow duration-300 border-b-0">
        {children}
      </Card>
    </motion.div>
  )
}
