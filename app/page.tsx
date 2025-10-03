"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Home, Building2, MapPin, TrendingUp, Users, Award, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
  const router = useRouter()
  const [searchLocation, setSearchLocation] = useState("")
  const [searchType, setSearchType] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchLocation) params.append("location", searchLocation)
    if (searchType) params.append("type", searchType)
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/himalayan-mountains-kathmandu-valley-sunrise.jpg"
            alt="Nepal Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Nepal Pattern Overlay */}
        <div className="absolute inset-0 nepal-pattern z-0" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-[#DC143C]/90 text-white border-0 px-4 py-1.5 text-sm">
              Nepal's Premier Real Estate Platform
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance"
          >
            Find Your Dream Home
            <br />
            <span className="text-[#DC143C]">In the Heart of Nepal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            Discover exceptional properties from the bustling streets of Kathmandu to the serene lakeside of Pokhara
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="flex flex-col md:flex-row gap-3 bg-white rounded-xl p-3 shadow-2xl">
              <div className="flex-1 flex items-center gap-2 px-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Location (e.g., Kathmandu, Pokhara)"
                  className="flex-1 outline-none text-sm"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <div className="hidden md:block w-px bg-border" />
              <div className="flex-1 flex items-center gap-2 px-3">
                <Home className="h-5 w-5 text-muted-foreground" />
                <select
                  className="flex-1 outline-none text-sm bg-transparent"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
              </div>
              <Button onClick={handleSearch} className="bg-[#DC143C] hover:bg-[#B8112E] text-white px-8">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-white"
          >
            {[
              { value: "500+", label: "Properties" },
              { value: "50+", label: "Expert Agents" },
              { value: "1000+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-[#DC143C]/10 text-[#DC143C] border-0">Featured Listings</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Premium Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selection of the finest properties across Nepal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#DC143C] text-white border-0">{property.status}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
                      <span className="text-[#DC143C] font-bold text-lg whitespace-nowrap ml-2">
                        NPR {property.price}M
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{property.beds} Beds</span>
                      <span>•</span>
                      <span>{property.baths} Baths</span>
                      <span>•</span>
                      <span>{property.area} sq.m</span>
                    </div>
                    <Link href={`/properties/${property.id}`}>
                      <Button variant="outline" className="w-full group/btn bg-transparent">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/properties">
              <Button size="lg" className="bg-[#DC143C] hover:bg-[#B8112E] text-white">
                View All Properties
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-[#DC143C]/10 text-[#DC143C] border-0">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Real Estate Partner</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service and expertise in Nepal's real estate market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <feature.icon className="h-8 w-8 text-[#DC143C]" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#DC143C] to-[#B8112E] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their perfect property with Nepal Estate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" variant="secondary" className="bg-white text-[#DC143C] hover:bg-white/90">
                  Browse Properties
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa in Budhanilkantha",
    price: "45",
    location: "Budhanilkantha, Kathmandu",
    beds: 5,
    baths: 4,
    area: 350,
    image: "/luxury-villa-nepal-mountains.jpg",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Modern Apartment in Lazimpat",
    price: "18.5",
    location: "Lazimpat, Kathmandu",
    beds: 3,
    baths: 2,
    area: 145,
    image: "/modern-apartment-kathmandu.jpg",
    status: "For Sale",
  },
  {
    id: 3,
    title: "Lakeside House in Pokhara",
    price: "28",
    location: "Lakeside, Pokhara",
    beds: 4,
    baths: 3,
    area: 220,
    image: "/lakeside-house-pokhara-nepal.jpg",
    status: "For Sale",
  },
]

const features = [
  {
    icon: Award,
    title: "Trusted Expertise",
    description: "Over 15 years of experience in Nepal's real estate market with proven track record",
  },
  {
    icon: Users,
    title: "Expert Agents",
    description: "Professional team of certified agents dedicated to finding your perfect property",
  },
  {
    icon: TrendingUp,
    title: "Best Prices",
    description: "Competitive pricing and transparent dealings with no hidden costs",
  },
  {
    icon: Building2,
    title: "Wide Selection",
    description: "Extensive portfolio of properties across all major cities in Nepal",
  },
]
