"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Maximize, ArrowRight, Heart } from "lucide-react"
import { useState } from "react"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    description: string
    price: string
    location: string
    bedrooms: number
    bathrooms: number
    area: string
    image_url: string
    property_type: string
    status: string
    agent_name?: string
  }
  viewMode?: "grid" | "list"
}

export function PropertyCard({ property, viewMode = "grid" }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const priceInMillions = (Number.parseFloat(property.price) / 1000000).toFixed(1)

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-56 overflow-hidden flex-shrink-0">
            <img
              src={property.image_url || "/placeholder.svg"}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className="bg-[#DC143C] text-white border-0">{property.status}</Badge>
              <Badge className="bg-black/60 text-white border-0">{property.property_type}</Badge>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-[#DC143C] text-[#DC143C]" : "text-gray-600"}`} />
            </button>
          </div>
          <CardContent className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-xl line-clamp-1 flex-1">{property.title}</h3>
                <span className="text-[#DC143C] font-bold text-2xl whitespace-nowrap ml-3">NPR {priceInMillions}M</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1.5">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1">{property.location}</span>
              </p>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{property.description}</p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-5">
                <div className="flex items-center gap-1.5">
                  <Bed className="h-4 w-4" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Maximize className="h-4 w-4" />
                  <span>{property.area} m²</span>
                </div>
              </div>
            </div>

            <Link href={`/properties/${property.id}`}>
              <Button variant="outline" className="w-full md:w-auto group/btn bg-transparent">
                View Details
                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image_url || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-[#DC143C] text-white border-0">{property.status}</Badge>
          <Badge className="bg-black/60 text-white border-0">{property.property_type}</Badge>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 transition-all ${isFavorite ? "fill-[#DC143C] text-[#DC143C] scale-110" : "text-gray-600"}`}
          />
        </button>
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg line-clamp-1 flex-1">{property.title}</h3>
          <span className="text-[#DC143C] font-bold text-xl whitespace-nowrap ml-3">NPR {priceInMillions}M</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1.5">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5 pb-5 border-b">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4" />
            <span>{property.area} m²</span>
          </div>
        </div>

        <Link href={`/properties/${property.id}`}>
          <Button variant="outline" className="w-full group/btn bg-transparent">
            View Details
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
