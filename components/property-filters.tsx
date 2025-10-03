"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface PropertyFiltersProps {
  filters: {
    locations: string[]
    propertyTypes: string[]
    priceRange: [number, number]
    bedrooms: number | null
    bathrooms: number | null
    status: string[]
  }
  onFiltersChange: (filters: any) => void
}

export function PropertyFilters({ filters, onFiltersChange }: PropertyFiltersProps) {
  const toggleArrayFilter = (key: "locations" | "propertyTypes" | "status", value: string) => {
    const current = filters[key]
    const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    onFiltersChange({ ...filters, [key]: updated })
  }

  const setNumberFilter = (key: "bedrooms" | "bathrooms", value: number | null) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const resetFilters = () => {
    onFiltersChange({
      locations: [],
      propertyTypes: [],
      priceRange: [0, 100],
      bedrooms: null,
      bathrooms: null,
      status: [],
    })
  }

  const activeFiltersCount =
    filters.locations.length +
    filters.propertyTypes.length +
    filters.status.length +
    (filters.bedrooms !== null ? 1 : 0) +
    (filters.bathrooms !== null ? 1 : 0) +
    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 100 ? 1 : 0)

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#DC143C]">Filter Properties</CardTitle>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="bg-[#DC143C] text-white">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Location</Label>
          <div className="space-y-2">
            {["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Nagarkot"].map((location) => (
              <div key={location} className="flex items-center gap-2">
                <Checkbox
                  id={location}
                  checked={filters.locations.includes(location)}
                  onCheckedChange={() => toggleArrayFilter("locations", location)}
                />
                <label htmlFor={location} className="text-sm cursor-pointer flex-1">
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Property Type</Label>
          <div className="space-y-2">
            {["House", "Apartment", "Villa", "Commercial", "Land", "Penthouse"].map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox
                  id={type}
                  checked={filters.propertyTypes.includes(type)}
                  onCheckedChange={() => toggleArrayFilter("propertyTypes", type)}
                />
                <label htmlFor={type} className="text-sm cursor-pointer flex-1">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">
            Price Range (NPR {filters.priceRange[0]}M - {filters.priceRange[1]}M)
          </Label>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value as [number, number] })}
            max={100}
            step={5}
            className="mb-2"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Bedrooms</Label>
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((bed) => (
              <Button
                key={bed}
                variant="outline"
                size="sm"
                onClick={() => setNumberFilter("bedrooms", filters.bedrooms === bed ? null : bed)}
                className={`flex-1 min-w-[60px] ${
                  filters.bedrooms === bed
                    ? "bg-[#DC143C] text-white border-[#DC143C] hover:bg-[#B8112E] hover:text-white"
                    : "bg-transparent"
                }`}
              >
                {bed === 5 ? "5+" : bed}
              </Button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Bathrooms</Label>
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4].map((bath) => (
              <Button
                key={bath}
                variant="outline"
                size="sm"
                onClick={() => setNumberFilter("bathrooms", filters.bathrooms === bath ? null : bath)}
                className={`flex-1 min-w-[60px] ${
                  filters.bathrooms === bath
                    ? "bg-[#DC143C] text-white border-[#DC143C] hover:bg-[#B8112E] hover:text-white"
                    : "bg-transparent"
                }`}
              >
                {bath === 4 ? "4+" : bath}
              </Button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">Status</Label>
          <div className="space-y-2">
            {["Available", "Sold", "Pending"].map((status) => (
              <div key={status} className="flex items-center gap-2">
                <Checkbox
                  id={status}
                  checked={filters.status.includes(status)}
                  onCheckedChange={() => toggleArrayFilter("status", status)}
                />
                <label htmlFor={status} className="text-sm cursor-pointer flex-1">
                  {status}
                </label>
              </div>
            ))}
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <Button variant="ghost" className="w-full" onClick={resetFilters}>
            <X className="h-4 w-4 mr-2" />
            Reset All Filters
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
