"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Tag,
  Calendar,
  Wrench,
  MapPin,
  Flame,
  CheckCircle,
  Leaf,
  Home,
  Zap,
  Droplets,
  Recycle,
  Sparkles,
  MessageCircle,
  Phone,
  Star,
  Quote,
  Car,
  Clock,
  Plane,
  Download,
  Eye,
} from "lucide-react"
import { motion } from "framer-motion"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedCard } from "@/components/animated-card"
import { StaggeredList } from "@/components/staggered-list"
import { WhatsAppLogo } from "@/components/whatsapp-logo"

export default function ElPinarLandingPage() {
  const testimonials = [
    {
      name: "María y Carlos Fernández",
      location: "Buenos Aires",
      image: "/testimonial-maria-carlos.png",
      rating: 5,
      text: "La tranquilidad del lugar y la libertad de diseño nos conquistaron desde el primer día.",
    },
    {
      name: "Roberto Martínez",
      location: "Inversor",
      image: "/testimonial-roberto.png",
      rating: 5,
      text: "La inversión ya se valorizó. Cumplen con todo.",
    },
    {
      name: "Familia Rodríguez",
      location: "Rosario",
      image: "/testimonial-familia-rodriguez.png",
      rating: 5,
      text: "Nuestros hijos corren libres y seguros. Nos cambió la vida.",
    },
  ]

  const lotFeatures = [
    { icon: Home, title: "950 m² de libertad" },
    { icon: Leaf, title: "Cero expensas" },
    { icon: Zap, title: "Electricidad lista" },
    { icon: Droplets, title: "Agua incluida" },
    { icon: Recycle, title: "Biodigestor ecológico" },
    { icon: Sparkles, title: "Diseño sin límites" },
  ]

  return (
    <SmoothScrollProvider>
      <div className="flex flex-col min-h-screen bg-brand-sand text-brand-soft-black font-sans pb-0 lg:pb-20">
        <motion.header
          className="sticky top-0 z-50 bg-brand-sand/80 backdrop-blur-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
        >
          <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
            {/* Placeholder for Logo Image */}
            {/* <Image src="/logo.svg" alt="El Pinar Logo" width={150} height={50} /> */}
            <Link href="#" className="flex items-center" prefetch={false}>
              <Image src="/logo-el-pinar.svg" alt="El Pinar Logo" width={300} height={100} className="h-20 w-auto" />
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="#imaginate"
                className="text-sm font-medium hover:text-brand-olive transition-colors"
                prefetch={false}
              >
                El Proyecto
              </Link>
              <Link
                href="#masterplan"
                className="text-sm font-medium hover:text-brand-olive transition-colors"
                prefetch={false}
              >
                Masterplan
              </Link>
              <Link
                href="#ubicacion"
                className="text-sm font-medium hover:text-brand-olive transition-colors"
                prefetch={false}
              >
                Ubicación
              </Link>
              <Link
                href="#lotes"
                className="text-sm font-medium hover:text-brand-olive transition-colors"
                prefetch={false}
              >
                Lotes
              </Link>
              <Link
                href="#testimonios"
                className="text-sm font-medium hover:text-brand-olive transition-colors"
                prefetch={false}
              >
                Testimonios
              </Link>
              <Link
                href="#preguntas"
                className="text-sm font-medium hover:text-brand-olive transition-colors"
                prefetch={false}
              >
                Preguntas
              </Link>
              <Link
                href="#contacto"
                className="text-sm font-medium hover:text-brand-olive transition-colors"
                prefetch={false}
              >
                Contacto
              </Link>
            </nav>
            <motion.div whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#25D366] text-white hover:bg-[#25D366]/90 md:inline-flex"
                onClick={() =>
                window.open(
                  "https://wa.me/5491173585559",
                  "_blank"
                )
                }
              >
                <WhatsAppLogo className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.header>

        <main>
          {/* Hero Section */}
          <AnimatedHero />

          {/* Imaginate Acá Section */}
          <AnimatedSection id="imaginate" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <motion.h2
                className="mb-12 text-center font-serif text-4xl font-bold text-brand-brown md:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Imaginate acá.
              </motion.h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  {
                    src: "/imaginate-1.png",
                    alt: "Fin de semana al aire libre",
                    title: "Fines de semana al aire libre",
                  },
                  {
                    src: "/imaginate-2.png",
                    alt: "Tu casa soñada",
                    title: "Tu casa soñada, sin gastos comunes",
                  },
                  { src: "/imaginate-3.png", alt: "Espacio y libertad", title: "Espacio y libertad, todo el año" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative h-80 w-full overflow-hidden rounded-lg group cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-6">
                      <h3 className="font-serif text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Masterplan Section */}
          <AnimatedSection id="masterplan" className="bg-brand-sand/30 py-16 md:py-24" direction="fade">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">Masterplan del Proyecto</h2>
                <p className="mt-4 text-lg text-brand-soft-black/80 max-w-4xl mx-auto">
                  Naturaleza, privacidad y armonía en cada rincón. Un diseño pensado para conectar con lo simple. Y con
                  vos.
                </p>
              </div>

              <div className="space-y-12">
                <motion.div
                  className="w-full max-w-5xl mx-auto"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  
                  <div className="bg-white rounded-lg p-2 shadow-lg">
                                <Image
                                  src="/PLANITOs_Brochure_ElPinar-5.png"
                                  alt="Masterplan Barrio Abierto El Pinar"
                                  width={600}
                                  height={400}
                                  className="w-full h-auto rounded"
                                />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open("https://maps.app.goo.gl/xaDpBSevaNqasJG1A", "_blank")}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Ver en detalle
                      </Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a href="/Brochure/El Pinar_Brochure de desarrollo_VF.pdf" download>
                          <Button variant="outline" className="w-full bg-transparent">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar PDF
                          </Button>
                        </a>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-brand-clay/10">
                    <h3 className="font-serif text-2xl font-bold text-brand-brown mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-brand-olive rounded-full"></div>
                      ¿Qué hace único a El Pinar?
                    </h3>
                    <StaggeredList className="space-y-4">
                      {[
                        "60 lotes de 950 m²",
                        "Calles mejoradas con cordón cuneta",
                        "Espacios verdes preservados",
                        "Acceso controlado",
                        "Reserva natural alrededor",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-3 rounded-lg hover:bg-brand-sand/30 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-brand-olive/10 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-brand-olive rounded-full"></div>
                          </div>
                          <span className="text-brand-soft-black leading-relaxed">
                            <strong className="text-brand-brown">
                              {item.split(" ")[0]} {item.split(" ")[1]}
                            </strong>{" "}
                            {item.split(" ").slice(2).join(" ")}
                          </span>
                        </div>
                      ))}
                    </StaggeredList>
                  </div>

                  <motion.div
                    className="bg-gradient-to-br from-brand-olive/5 to-brand-clay/10 rounded-xl p-8 border-l-4 border-brand-olive shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-brand-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-brand-olive rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-brown text-lg mb-2">Etapa actual</h4>
                        <p className="text-brand-soft-black/80 leading-relaxed">
                          Solo <span className="font-bold text-brand-olive">10 lotes</span> en preventa. Obras en
                          marcha. Entrega <span className="font-bold text-brand-brown">abril 2026</span>.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-brand-olive/20">
                      <p className="text-sm text-brand-soft-black/70 italic">
                        "Un proyecto pensado para quienes buscan calidad de vida sin comprometer la inversión."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonials Section */}
          <AnimatedSection id="testimonios" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">
                  Lo que dicen nuestros propietarios
                </h2>
                <p className="mt-4 text-lg text-brand-soft-black/80 max-w-4xl mx-auto">
                  Más de 50 familias ya eligieron vivir distinto.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.2}
                    className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                          >
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      <Quote className="h-8 w-8 text-brand-olive/30 mb-4" />

                      <p className="text-brand-soft-black/90 mb-4 italic">"{testimonial.text}"</p>

                      <div className="flex items-center gap-3 mt-6">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-bold text-brand-brown">{testimonial.name}</p>
                          <p className="text-sm text-brand-soft-black/70">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </AnimatedCard>
                ))}
              </div>

              {/* Social Proof Stats */}
              <motion.div
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  { value: 15, suffix: "", label: "casas construidas" },
                  { value: 50, suffix: "+", label: "lotes vendidos" },
                  { value: 100, suffix: "%", label: "satisfacción" },
                  { value: 2026, suffix: "", label: "entrega garantizada" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-brand-olive">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-brand-soft-black/70">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Oportunidad en Números Section */}
          <AnimatedSection id="oportunidad" className="bg-white py-16 md:py-24" direction="right">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div>
                  <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">Oportunidad en Números</h2>
                  <p className="mt-4 text-lg text-brand-soft-black/80">
                    Invertí hoy. Viví para siempre. Una zona con futuro y el precio del momento.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="mt-8 bg-brand-brown text-white hover:bg-brand-brown/90"onClick={() =>
                      window.open(
                        "https://wa.me/5491173585559",
                        "_blank"
                      )
                      }
                    >
                      Reservar ahora  
                    </Button>

                  </motion.div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {[
                    { icon: Tag, title: "Valor en preventa", text: "Desde U$D 20.000" },
                    { icon: Calendar, title: "Entrega estimada", text: "Entrega abril 2026" },
                    { icon: Wrench, title: "Obras ya iniciadas", text: "Obras iniciadas" },
                    { icon: MapPin, title: "Ubicación", text: "A solo 100 km de CABA" },
                    { icon: Flame, title: "¡Últimos 9 lotes!", text: "Oportunidad única" },
                  ].map((item, index) => (
                    <AnimatedCard key={index} delay={index * 0.1} className="h-full group" hoverScale={1.08}>
                      <CardContent className="p-8 bg-gradient-to-br from-brand-sand/80 to-brand-clay/30 border-brand-clay/30 h-full flex flex-col justify-between min-h-[200px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="p-4 bg-brand-olive/10 rounded-full group-hover:bg-brand-olive/20 transition-colors duration-300">
                            <item.icon className="h-10 w-10 text-brand-olive group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-serif text-xl font-bold text-brand-brown leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-base text-brand-soft-black/80 leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                        <div className="mt-4 h-1 bg-gradient-to-r from-brand-olive/20 via-brand-olive/60 to-brand-olive/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </CardContent>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Location Section */}
          <AnimatedSection id="ubicacion" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">Ubicación Estratégica</h2>
                <p className="mt-4 text-lg text-brand-soft-black/80">
                  Viví cerca. Sentite lejos. Lima está a solo 15 min de Zárate. A 2 minutos de la Panamericana. Sin
                  peajes. Sin estrés.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Visual Map Section */}
                <div className="bg-white rounded-lg p-2 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3305.2670973659424!2d-59.21133330000001!3d-34.0626667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDAzJzQ1LjYiUyA1OcKwMTInNDAuOCJX!5e0!3m2!1ses!2sar!4v1753973276895!5m2!1ses!2sar"
                      width="100%"
                      height="500px"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-80 md:h-96 lg:h-[500px] rounded"
                    />
                  </div>

                {/* Location Benefits */}
                <div className="space-y-6">
                  {[
                    { icon: Car, title: "1h 15min desde CABA", text: "Acceso directo por Ruta 9, sin peajes" },
                    {
                      icon: MapPin,
                      title: "15 min a comercios y servicios",
                      text: "Servicios, comercios y conectividad",
                    },
                    { icon: Plane, title: "45 min al aeropuerto", text: "Ezeiza via Ruta 9 y Acceso Oeste" },
                    {
                      icon: Clock,
                      title: "Zona en crecimiento y desarrollo",
                      text: "Desarrollo turístico y residencial",
                    },
                  ].map((item, index) => (
                    <AnimatedCard key={index} delay={index * 0.1} hoverScale={1.05}>
                      <CardContent className="p-6 flex items-center gap-4 border-brand-clay/20">
                        <item.icon className="h-8 w-8 text-brand-olive" />
                        <div>
                          <h3 className="font-bold text-brand-brown">{item.title}</h3>
                          <p className="text-brand-soft-black/70">{item.text}</p>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ¿Qué incluye cada lote? Section */}
          <AnimatedSection id="lotes" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">¿Qué incluye cada lote?</h2>
              <p className="mt-4 max-w-5xl mx-auto text-lg text-brand-soft-black/80">
                Todo lo que necesitás para arrancar. Sin gastos escondidos. Sin reglas absurdas.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {lotFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-olive/10 text-brand-olive"
                      whileHover={{
                        backgroundColor: "rgba(107, 142, 35, 0.2)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <item.icon className="h-8 w-8" />
                    </motion.div>
                    <h3 className="mt-4 font-serif text-xl font-bold">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Badge className="mt-12 bg-brand-clay text-brand-brown text-base p-3">
                  Diseñá tu casa, quincho, pileta... ¡lo que quieras!
                </Badge>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* ¿Por qué invertir ahora? Section */}
          <AnimatedSection className="py-16 md:py-24" direction="left">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div>
                  <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">
                    Una inversión inteligente y natural.
                  </h2>
                  <StaggeredList className="mt-6 space-y-4">
                    {[
                      "Zona en expansión con gran potencial",
                      "Estimación de revalorización del 50%",
                      "Ideal para renta, vivienda o escapadas",
                    ].map((text, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 flex-shrink-0 text-brand-olive mt-1" />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: text.replace(/([^.]*\b\w+\b[^.]*)/, '<span class="font-bold">$1</span>'),
                          }}
                        />
                      </div>
                    ))}
                  </StaggeredList>
                </div>
                <motion.div
                  className="rounded-lg border-l-4 border-brand-olive bg-white p-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-lg italic text-brand-soft-black/90">
                    “La paz no tiene precio. Y saber que además se valoriza, es un plus.”
                  </p>
                  <p className="mt-4 font-bold text-brand-brown">— Familia Martinez, Propietarios</p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Conocé Lima Section */}
          <AnimatedSection className="bg-brand-clay/50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <motion.div
                  className="h-80 w-full overflow-hidden rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LIMA.jpg-nkxUJOOg3VgFnmxQNHAfwBW2D0nHBd.jpeg"
                    alt="Plaza del pueblo de Lima, Zárate"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">
                    Conocé Lima, Provincia de Buenos Aires.{" "}
                  </h2>
                  <p className="mt-4 text-lg text-brand-soft-black/80">
                    Un pueblo con historia y futuro. Fundado en 1885. Perfecto para descansar, crecer o invertir.
                    Ubicado, conectado y en pleno desarrollo.
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Preguntas Frecuentes Section */}
          <AnimatedSection id="preguntas" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
              <h2 className="mb-12 text-center font-serif text-4xl font-bold text-brand-brown md:text-5xl">
                Preguntas Frecuentes
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      value: "item-1",
                      question: "¿Cuándo se entrega?",
                      answer: "Abril 2026. Obras ya iniciadas.",
                    },
                    {
                      value: "item-2",
                      question: "¿Puedo construir lo que quiera?",
                      answer: "Sí. Sin restricciones ni mínimas.",
                    },
                    {
                      value: "item-3",
                      question: "¿Hay expensas?",
                      answer: "No. Es un barrio abierto. Solo mantenés tu lote.",
                    },
                    {
                      value: "item-4",
                      question: "¿Cómo accedo al financiamiento?",
                      answer: "Desde U$D 11.000 + 22 cuotas. Financiación propia y flexible.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.value}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <AccordionItem value={item.value}>
                        <AccordionTrigger className="text-lg font-bold hover:text-brand-olive transition-colors">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base">{item.answer}</AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Final CTA Section */}
          <AnimatedSection id="contacto" className="relative py-20 md:py-32 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Country%20couple%20aesthetic%F0%9F%AB%B6%F0%9F%8F%BB.jpg-vgA1VQXZof2RfAbgHao3EcaCAxAt0O.jpeg"
              alt="Pareja disfrutando de la tranquilidad en El Pinar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-brown/70" />
            <motion.div
              className="relative z-10 text-center text-white px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Tu lugar en el mundo te está esperando</h2>
              <p className="mt-4 max-w-4xl mx-auto text-lg">
                Quedan solo 9 lotes en esta etapa. No te quedes afuera. Es ahora.
              </p>
              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-brand-olive text-white hover:bg-brand-olive/90"onClick={() =>
                    window.open(
                      "https://wa.me/5491173585559",
                      "_blank"
                    )
                    }
                  >
                    <WhatsAppLogo className="h-5 w-5 mr-2" />
                    Reservar por WhatsApp
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-brand-brown bg-transparent"
                      onClick={() =>
                      window.open(
                        "https://wa.me/5491173585559",
                        "_blank"
                      )
                      }
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar ahora
                    </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span>📞 +54 11 2345-6789</span>
                <span>📧 info@barrioabiertoelpinar.com</span>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </main>

        <motion.footer
          className="bg-brand-brown text-brand-sand"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Barrio Abierto El Pinar. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" className="text-sm hover:text-brand-clay transition-colors" prefetch={false}>
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Llamar</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" className="text-sm hover:text-brand-clay transition-colors" prefetch={false}>
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.footer>

        {/* Floating WhatsApp Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="https://wa.me/5491123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
            prefetch={false}
          >
            <WhatsAppLogo className="h-8 w-8" />
            <span className="sr-only">Contactanos por WhatsApp</span>
          </Link>
        </motion.div>

        {/* Sticky CTA Bar - Desktop Only */}
        <motion.div
          className="hidden lg:block fixed bottom-0 left-0 right-0 z-40 bg-brand-brown/95 backdrop-blur-sm border-t border-brand-clay/20"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-brand-sand font-bold text-lg">¡Solo quedan 9 lotes!</p>
                  <p className="text-brand-clay text-sm">Desde U$D 11.000 + financiación</p>
                </div>
                <div className="h-8 w-px bg-brand-clay/30"></div>
                <div className="flex items-center gap-2 text-brand-clay text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Entrega abril 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-brand-olive text-white hover:bg-brand-olive/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                    window.open(
                      "https://wa.me/5491173585559",
                      "_blank"
                    )
                    }
              
                  >
                    <WhatsAppLogo className="h-5 w-5 mr-2" />
                    Reservar Ahora
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-brand-clay text-brand-sand hover:bg-brand-sand hover:text-brand-brown transition-all duration-300 bg-transparent"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SmoothScrollProvider>
  )
}
