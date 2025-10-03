import { mockAgents, mockProperties } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Award, MapPin, Bed, Bath, Maximize } from "lucide-react"
import Link from "next/link"

export default async function AgentDetailPage({ params }: { params: { id: string } }) {
  const agentId = Number.parseInt(params.id)

  const agent = mockAgents.find((a) => a.id === agentId)

  if (!agent) {
    notFound()
  }

  const properties = mockProperties.filter((p) => p.agent_id === agentId).slice(0, 6)

  return (
    <div className="min-h-screen pt-20">
      {/* Agent Header */}
      <section className="bg-gradient-to-br from-[#DC143C] to-[#B8112E] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={agent.image_url || "/placeholder.svg"}
              alt={agent.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div className="text-center md:text-left">
              <Badge className="mb-3 bg-white/20 text-white border-0 flex items-center gap-1 w-fit mx-auto md:mx-0">
                <Award className="h-3 w-3" />
                {agent.properties_sold} Properties Sold
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{agent.name}</h1>
              <p className="text-xl text-white/90 mb-4">{agent.specialization}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href={`tel:${agent.phone}`}>
                  <Button variant="secondary" className="bg-white text-[#DC143C] hover:bg-white/90">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href={`mailto:${agent.email}`}>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About {agent.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{agent.bio}</p>
              </CardContent>
            </Card>

            {/* Listings */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Current Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {properties.map((property: any) => {
                  const priceInMillions = (Number.parseFloat(property.price) / 1000000).toFixed(1)
                  return (
                    <Card key={property.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={property.image_url || "/placeholder.svg"}
                          alt={property.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 left-3 bg-[#DC143C] text-white border-0">
                          {property.status}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold line-clamp-1 flex-1">{property.title}</h3>
                          <span className="text-[#DC143C] font-bold whitespace-nowrap ml-2">
                            NPR {priceInMillions}M
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {property.location}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Bed className="h-3 w-3" />
                            {property.bedrooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="h-3 w-3" />
                            {property.bathrooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Maximize className="h-3 w-3" />
                            {property.area}m²
                          </span>
                        </div>
                        <Link href={`/properties/${property.id}`}>
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            View Details
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href={`tel:${agent.phone}`} className="text-[#DC143C] font-medium hover:underline">
                      {agent.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href={`mailto:${agent.email}`} className="text-[#DC143C] font-medium hover:underline break-all">
                      {agent.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Specialization</p>
                    <p className="font-medium">{agent.specialization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Properties Sold</span>
                    <span className="font-bold text-[#DC143C] text-xl">{agent.properties_sold}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Active Listings</span>
                    <span className="font-bold text-xl">{properties.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                    <span className="font-bold text-xl">10+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
