"use client"

import { useState, useMemo } from "react"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilters } from "@/components/property-filters"
import { Badge } from "@/components/ui/badge"
import { mockProperties } from "@/lib/mock-data"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    locations: [] as string[],
    propertyTypes: [] as string[],
    priceRange: [0, 100] as [number, number],
    bedrooms: null as number | null,
    bathrooms: null as number | null,
    status: [] as string[],
  })
  const [sortBy, setSortBy] = useState("latest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties]

    // Filter by location
    if (filters.locations.length > 0) {
      filtered = filtered.filter((p) => filters.locations.some((loc) => p.location.includes(loc)))
    }

    // Filter by property type
    if (filters.propertyTypes.length > 0) {
      filtered = filtered.filter((p) => filters.propertyTypes.includes(p.property_type))
    }

    // Filter by price range
    const [minPrice, maxPrice] = filters.priceRange
    filtered = filtered.filter((p) => {
      const priceInMillions = Number.parseFloat(p.price) / 1000000
      return priceInMillions >= minPrice && priceInMillions <= maxPrice
    })

    // Filter by bedrooms
    if (filters.bedrooms !== null) {
      filtered = filtered.filter((p) => p.bedrooms >= filters.bedrooms!)
    }

    // Filter by bathrooms
    if (filters.bathrooms !== null) {
      filtered = filtered.filter((p) => p.bathrooms >= filters.bathrooms!)
    }

    // Filter by status
    if (filters.status.length > 0) {
      filtered = filtered.filter((p) => filters.status.includes(p.status))
    }

    // Sort properties
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price))
        break
      case "price-high":
        filtered.sort((a, b) => Number.parseFloat(b.price) - Number.parseFloat(a.price))
        break
      case "area-large":
        filtered.sort((a, b) => Number.parseFloat(b.area) - Number.parseFloat(a.area))
        break
      default:
        // Latest (default order)
        break
    }

    return filtered
  }, [filters, sortBy])

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#DC143C] to-[#B8112E] text-white py-16">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-0">Browse Properties</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Perfect Property</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Explore our extensive collection of properties across Nepal's most desirable locations
          </p>
        </div>
      </section>

      {/* Filters and Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <PropertyFilters filters={filters} onFiltersChange={setFilters} />
            </aside>

            {/* Properties Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProperties.length}</span> of{" "}
                  <span className="font-semibold text-foreground">{mockProperties.length}</span> properties
                </p>
                <div className="flex items-center gap-3">
                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-1 border rounded-lg p-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={
                        viewMode === "grid" ? "bg-[#DC143C] text-white hover:bg-[#B8112E] hover:text-white" : ""
                      }
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={
                        viewMode === "list" ? "bg-[#DC143C] text-white hover:bg-[#B8112E] hover:text-white" : ""
                      }
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#DC143C] bg-background"
                  >
                    <option value="latest">Sort by: Latest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="area-large">Area: Largest First</option>
                  </select>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {filteredProperties.length > 0 ? (
                  <motion.div
                    key={`${viewMode}-${filteredProperties.length}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                        : "flex flex-col gap-6"
                    }
                  >
                    {filteredProperties.map((property: any, index: number) => (
                      <motion.div
                        key={property.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <PropertyCard property={property} viewMode={viewMode} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                    <div className="text-6xl mb-4">🏠</div>
                    <h3 className="text-2xl font-semibold mb-2">No properties found</h3>
                    <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results</p>
                    <Button
                      onClick={() =>
                        setFilters({
                          locations: [],
                          propertyTypes: [],
                          priceRange: [0, 100],
                          bedrooms: null,
                          bathrooms: null,
                          status: [],
                        })
                      }
                      className="bg-[#DC143C] hover:bg-[#B8112E] text-white"
                    >
                      Reset All Filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
