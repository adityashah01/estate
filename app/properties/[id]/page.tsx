import { mockProperties } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Bed, Bath, Maximize, Calendar, Phone, Mail, Share2 } from "lucide-react"
import Link from "next/link"

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const propertyId = Number.parseInt(params.id)

  const property = mockProperties.find((p) => p.id === propertyId)

  if (!property) {
    notFound()
  }

  const priceInMillions = (Number.parseFloat(property.price) / 1000000).toFixed(1)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={property.image_url || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 mb-4">
              <Badge className="bg-[#DC143C] text-white border-0">{property.status}</Badge>
              <Badge className="bg-white/90 text-foreground border-0">{property.property_type}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{property.title}</h1>
            <p className="text-white/90 flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              {property.location}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price and Key Features */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <p className="text-3xl font-bold text-[#DC143C]">NPR {priceInMillions} Million</p>
                  </div>
                  <Button variant="outline" size="icon" className="bg-transparent">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Bed className="h-6 w-6 text-[#DC143C]" />
                    <div>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                      <p className="font-semibold">{property.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Bath className="h-6 w-6 text-[#DC143C]" />
                    <div>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                      <p className="font-semibold">{property.bathrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Maximize className="h-6 w-6 text-[#DC143C]" />
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-semibold">{property.area} m²</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-[#DC143C]" />
                    <div>
                      <p className="text-sm text-muted-foreground">Listed</p>
                      <p className="font-semibold">
                        {new Date(property.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Property</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Mountain View",
                    "Parking Space",
                    "Garden",
                    "Modern Kitchen",
                    "Security System",
                    "Balcony",
                    "Hardwood Floors",
                    "Central Heating",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#DC143C] rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Agent</h3>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={property.agent_image || "/placeholder.svg"}
                    alt={property.agent_name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{property.agent_name}</p>
                    <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <a
                    href={`tel:${property.agent_phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#DC143C]"
                  >
                    <Phone className="h-4 w-4" />
                    {property.agent_phone}
                  </a>
                  <a
                    href={`mailto:${property.agent_email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#DC143C]"
                  >
                    <Mail className="h-4 w-4" />
                    {property.agent_email}
                  </a>
                </div>

                <Link href={`/contact?property=${property.id}`}>
                  <Button className="w-full bg-[#DC143C] hover:bg-[#B8112E] text-white mb-2">Schedule Viewing</Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Mortgage Calculator</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-muted-foreground">Loan Amount</label>
                    <input
                      type="text"
                      defaultValue={`NPR ${priceInMillions}M`}
                      className="w-full mt-1 px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Interest Rate (%)</label>
                    <input type="number" defaultValue="10" className="w-full mt-1 px-3 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Loan Term (years)</label>
                    <input type="number" defaultValue="20" className="w-full mt-1 px-3 py-2 border rounded-lg" />
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Calculate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
