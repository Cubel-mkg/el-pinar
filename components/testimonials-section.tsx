import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María y Carlos Fernández",
      location: "Buenos Aires",
      image: "/placeholder.svg?width=80&height=80",
      rating: 5,
      text: "Compramos nuestro lote hace un año y ya estamos construyendo nuestra casa de fin de semana. La tranquilidad del lugar y la libertad de diseñar sin restricciones nos conquistó desde el primer día.",
      highlight: "La tranquilidad del lugar nos conquistó",
    },
    {
      name: "Roberto Martínez",
      location: "Inversor",
      image: "/placeholder.svg?width=80&height=80",
      rating: 5,
      text: "Como inversor, vi el potencial de la zona inmediatamente. La revalorización ya es evidente y el proyecto está cumpliendo todos los plazos prometidos. Una inversión muy sólida.",
      highlight: "Una inversión muy sólida",
    },
    {
      name: "Familia Rodríguez",
      location: "Rosario",
      image: "/placeholder.svg?width=80&height=80",
      rating: 5,
      text: "Nuestros hijos pueden correr libres y seguros. Es el lugar perfecto para desconectarse de la ciudad sin estar demasiado lejos. El financiamiento nos permitió cumplir el sueño.",
      highlight: "El lugar perfecto para desconectarse",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">
            Lo que dicen nuestros propietarios
          </h2>
          <p className="mt-4 text-lg text-brand-soft-black/80 max-w-2xl mx-auto">
            Más de 50 familias ya eligieron El Pinar como su lugar en el mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-brand-clay/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-brand-olive/30 mb-4" />

                <p className="text-brand-soft-black/90 mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-brand-brown">{testimonial.name}</p>
                    <p className="text-sm text-brand-soft-black/70">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-brand-olive">50+</div>
            <div className="text-sm text-brand-soft-black/70">Lotes vendidos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-olive">15</div>
            <div className="text-sm text-brand-soft-black/70">Casas construidas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-olive">100%</div>
            <div className="text-sm text-brand-soft-black/70">Satisfacción</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-olive">2026</div>
            <div className="text-sm text-brand-soft-black/70">Entrega garantizada</div>
          </div>
        </div>
      </div>
    </section>
  )
}
