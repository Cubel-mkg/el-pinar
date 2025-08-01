import { MapPin, Clock, Car, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function EnhancedLocationSection() {
  return (
    <section id="ubicacion" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-brand-brown md:text-5xl">Ubicación Estratégica</h2>
          <p className="mt-4 text-lg text-brand-soft-black/80">
            Lima se encuentra ubicada en el <span className="font-bold">KM 100 de la Ruta 9</span>, a solo{" "}
            <span className="font-bold">15 minutos de Zárate</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Map Section */}
          <div className="relative">
            <div className="bg-brand-sand/50 rounded-lg p-8 relative overflow-hidden">
              {/* Simplified Route Visualization */}
              <div className="relative h-64 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-1 bg-brand-brown/30 relative">
                    <div className="absolute left-0 w-4 h-4 bg-brand-brown rounded-full -top-1.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute right-0 w-4 h-4 bg-brand-olive rounded-full -top-1.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 -top-8">
                  <div className="bg-brand-brown text-white px-3 py-1 rounded text-sm font-bold">CABA</div>
                </div>

                <div className="absolute right-0 -top-8">
                  <div className="bg-brand-olive text-white px-3 py-1 rounded text-sm font-bold">KM 100</div>
                </div>

                <div className="bg-brand-clay text-brand-brown px-4 py-2 rounded-lg font-bold text-lg">RUTA 9</div>
              </div>

              <div className="text-center mt-4">
                <p className="text-brand-brown font-bold">100 km desde Buenos Aires</p>
                <p className="text-brand-soft-black/70">Acceso directo por Ruta 9</p>
              </div>
            </div>
          </div>

          {/* Location Benefits */}
          <div className="space-y-6">
            <Card className="border-brand-clay/20">
              <CardContent className="p-6 flex items-center gap-4">
                <Car className="h-8 w-8 text-brand-olive" />
                <div>
                  <h3 className="font-bold text-brand-brown">1h 15min desde CABA</h3>
                  <p className="text-brand-soft-black/70">Acceso directo por Ruta 9, sin peajes</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-clay/20">
              <CardContent className="p-6 flex items-center gap-4">
                <MapPin className="h-8 w-8 text-brand-olive" />
                <div>
                  <h3 className="font-bold text-brand-brown">15 min a Zárate centro</h3>
                  <p className="text-brand-soft-black/70">Servicios, comercios y conectividad</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-clay/20">
              <CardContent className="p-6 flex items-center gap-4">
                <Plane className="h-8 w-8 text-brand-olive" />
                <div>
                  <h3 className="font-bold text-brand-brown">45 min al Aeropuerto</h3>
                  <p className="text-brand-soft-black/70">Ezeiza via Ruta 9 y Acceso Oeste</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-clay/20">
              <CardContent className="p-6 flex items-center gap-4">
                <Clock className="h-8 w-8 text-brand-olive" />
                <div>
                  <h3 className="font-bold text-brand-brown">Zona en crecimiento</h3>
                  <p className="text-brand-soft-black/70">Desarrollo turístico y residencial</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
