"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { FloatingElements } from "./floating-elements"

export function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/hero-familia-naturaleza.jpg"
        alt="Familia disfrutando de la naturaleza en El Pinar"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <FloatingElements />

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Badge className="mb-4 border-brand-clay bg-brand-clay/20 text-brand-clay">
            Obras ya iniciadas – Entrega estimada abril 2026
          </Badge>
        </motion.div>

        <motion.h1 className="font-serif text-5xl font-bold md:text-7xl" variants={itemVariants}>
          La naturaleza te estaba esperando.
        </motion.h1>

        <motion.p className="mt-4 max-w-2xl text-lg md:text-xl" variants={itemVariants}>
          Tu lugar en el mundo, sin expensas ni restricciones
        </motion.p>

        <motion.div className="mt-8 flex flex-col gap-4 sm:flex-row" variants={itemVariants}>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" className="bg-brand-olive text-white hover:bg-brand-olive/90">
              Reservá tu lote hoy
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-brown bg-transparent"
            >
              Quiero más info
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className="mt-12 flex flex-col items-center" variants={itemVariants}>
          <p className="text-sm text-white/80 mb-2">Descubrí todo sobre El Pinar</p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
