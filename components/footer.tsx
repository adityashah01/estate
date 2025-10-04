import Link from "next/link"
import { NepalLogo } from "@/components/nepal-logo"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <NepalLogo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner in finding the perfect property in Nepal. From the mountains to the valleys, we help
              you find home.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#DC143C]/10 flex items-center justify-center hover:bg-[#DC143C] hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#DC143C]/10 flex items-center justify-center hover:bg-[#DC143C] hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#DC143C]/10 flex items-center justify-center hover:bg-[#DC143C] hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#DC143C]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties"
                  className="text-sm text-muted-foreground hover:text-[#DC143C] transition-colors"
                >
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-sm text-muted-foreground hover:text-[#DC143C] transition-colors">
                  Our Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[#DC143C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-[#DC143C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold mb-4 text-[#DC143C]">Property Types</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Residential</li>
              <li className="text-sm text-muted-foreground">Commercial</li>
              <li className="text-sm text-muted-foreground">Land</li>
              <li className="text-sm text-muted-foreground">Luxury Villas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-[#DC143C]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#DC143C]" />
                <span>Durbar Marg, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#DC143C]" />
                <span>+977-1-4234567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#DC143C]" />
                <span>aditya.shh15.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nepal Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
