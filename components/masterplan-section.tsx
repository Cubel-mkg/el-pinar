import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye } from "lucide-react"
import Image from "next/image"

export function MasterplanSection() {
  return (
    <section id="masterplan" className="bg-brand-sand/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">Masterplan del Proyecto</h2>
          <p className="mt-4 text-lg text-brand-soft-black/80 max-w-2xl mx-auto">
            Diseño pensado para maximizar el contacto con la naturaleza y garantizar la privacidad de cada lote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <Image
                src="/placeholder.svg?width=600&height=400&text=Masterplan+El+Pinar"
                alt="Masterplan Barrio Abierto El Pinar"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" className="flex-1 bg-transparent">
                <Eye className="h-4 w-4 mr-2" />
                Ver en detalle
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Descargar PDF
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-4">Características del desarrollo</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge className="bg-brand-olive/10 text-brand-olive">✓</Badge>
                  <span>
                    <strong>110 lotes</strong> de 950 m² cada uno
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-brand-olive/10 text-brand-olive">✓</Badge>
                  <span>
                    <strong>Calles internas</strong> con mejorado y cordón cuneta
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-brand-olive/10 text-brand-olive">✓</Badge>
                  <span>
                    <strong>Espacios verdes</strong> comunitarios preservados
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-brand-olive/10 text-brand-olive">✓</Badge>
                  <span>
                    <strong>Acceso controlado</strong> con portón principal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-brand-olive/10 text-brand-olive">✓</Badge>
                  <span>
                    <strong>Reserva natural</strong> en el perímetro
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-brand-olive">
              <h4 className="font-bold text-brand-brown mb-2">Etapa actual</h4>
              <p className="text-brand-soft-black/80">
                <strong>Fase 1:</strong> 9 lotes disponibles en preventa con todas las obras de infraestructura
                iniciadas. Entrega estimada abril 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
