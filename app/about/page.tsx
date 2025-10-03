import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, Users, TrendingUp, Heart, Target, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#DC143C] to-[#B8112E] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-0">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Real Estate Partner in Nepal</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been helping families and businesses find their perfect properties across the
            beautiful landscapes of Nepal
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#DC143C]/10 text-[#DC143C] border-0">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Dreams Since 2008</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nepal Estate was founded with a simple mission: to make property buying and selling transparent,
                  efficient, and accessible to everyone in Nepal. What started as a small office in Kathmandu has grown
                  into the nation's most trusted real estate platform.
                </p>
                <p>
                  We understand that buying a home is one of the most important decisions you'll ever make. That's why
                  we've built a team of dedicated professionals who are committed to guiding you through every step of
                  the journey.
                </p>
                <p>
                  From the bustling streets of Kathmandu to the serene lakeside of Pokhara, we've helped thousands of
                  families find their dream homes and businesses secure their ideal commercial spaces.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/nepal-real-estate-office-team.jpg"
                alt="Nepal Estate Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#DC143C] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional real estate services that exceed expectations, making property transactions
                seamless and stress-free for all our clients across Nepal.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Nepal's leading real estate platform, recognized for innovation, integrity, and our commitment to
                helping every Nepali find their perfect home.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#DC143C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, transparency, and client satisfaction are at the heart of everything we do. We build lasting
                relationships based on trust and excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#DC143C]/10 text-[#DC143C] border-0">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine local expertise with modern technology to deliver unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#DC143C]/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#DC143C]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Properties Listed" },
  { value: "1000+", label: "Happy Clients" },
  { value: "50+", label: "Expert Agents" },
]

const features = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "All our agents are certified and undergo continuous training to provide the best service.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "We take time to understand your unique needs and preferences to find the perfect match.",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "Deep knowledge of Nepal's real estate market trends and property values.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Target,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. We believe in honest and transparent dealings.",
  },
  {
    icon: Eye,
    title: "Wide Network",
    description: "Extensive connections across Nepal give you access to exclusive property listings.",
  },
]
