import { mockAgents } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Award } from "lucide-react"
import Link from "next/link"

export default async function AgentsPage() {
  const agents = mockAgents

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#DC143C] to-[#B8112E] text-white py-16">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-0">Our Team</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Agents</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Professional real estate experts dedicated to helping you find your perfect property in Nepal
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent: any) => (
              <Card key={agent.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-secondary/30">
                  <img
                    src={agent.image_url || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#DC143C] text-white border-0 flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {agent.properties_sold} Sales
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{agent.name}</h3>
                  <p className="text-sm text-[#DC143C] font-medium mb-3">{agent.specialization}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{agent.bio}</p>

                  <div className="space-y-2 mb-4 pb-4 border-b">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#DC143C] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#DC143C] transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {agent.email}
                    </a>
                  </div>

                  <Link href={`/agents/${agent.id}`}>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced agents are here to guide you through every step of your real estate journey
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#DC143C] hover:bg-[#B8112E] text-white">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
