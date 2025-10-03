"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, Lock, Heart, Eye, Bell } from "lucide-react"

export default function ProfilePage() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div className="min-h-screen pt-20 bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="auth" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="auth">Account</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </TabsList>

            {/* Authentication Tab */}
            <TabsContent value="auth">
              <div className="max-w-md mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-[#DC143C]" />
                    </div>
                    <CardTitle className="text-2xl">{isSignIn ? "Welcome Back" : "Create Account"}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {isSignIn ? "Sign in to access your account" : "Join Nepal Estate today"}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      {!isSignIn && (
                        <div>
                          <label className="text-sm font-medium mb-2 block">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Enter your name" className="pl-10" />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="text-sm font-medium mb-2 block">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="email" placeholder="your@email.com" className="pl-10" />
                        </div>
                      </div>

                      {!isSignIn && (
                        <div>
                          <label className="text-sm font-medium mb-2 block">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="tel" placeholder="+977-98XXXXXXXX" className="pl-10" />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="text-sm font-medium mb-2 block">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="password" placeholder="Enter your password" className="pl-10" />
                        </div>
                      </div>

                      {isSignIn && (
                        <div className="flex items-center justify-between text-sm">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span>Remember me</span>
                          </label>
                          <a href="#" className="text-[#DC143C] hover:underline">
                            Forgot password?
                          </a>
                        </div>
                      )}

                      <Button type="submit" className="w-full bg-[#DC143C] hover:bg-[#B8112E] text-white">
                        {isSignIn ? "Sign In" : "Create Account"}
                      </Button>

                      <div className="text-center text-sm">
                        <span className="text-muted-foreground">
                          {isSignIn ? "Don't have an account?" : "Already have an account?"}
                        </span>{" "}
                        <button
                          type="button"
                          onClick={() => setIsSignIn(!isSignIn)}
                          className="text-[#DC143C] hover:underline font-medium"
                        >
                          {isSignIn ? "Sign Up" : "Sign In"}
                        </button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <Card className="lg:col-span-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-12 w-12 text-[#DC143C]" />
                    </div>
                    <h3 className="font-bold text-xl mb-1">Ram Sharma</h3>
                    <p className="text-sm text-muted-foreground mb-4">ram.sharma@email.com</p>
                    <Badge className="mb-4 bg-[#DC143C]/10 text-[#DC143C] border-0">Premium Member</Badge>
                    <Button variant="outline" className="w-full bg-transparent">
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Activity Cards */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Heart className="h-8 w-8 text-[#DC143C] mx-auto mb-2" />
                        <p className="text-2xl font-bold mb-1">12</p>
                        <p className="text-sm text-muted-foreground">Saved Properties</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Eye className="h-8 w-8 text-[#DC143C] mx-auto mb-2" />
                        <p className="text-2xl font-bold mb-1">28</p>
                        <p className="text-sm text-muted-foreground">Properties Viewed</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Bell className="h-8 w-8 text-[#DC143C] mx-auto mb-2" />
                        <p className="text-2xl font-bold mb-1">5</p>
                        <p className="text-sm text-muted-foreground">Active Alerts</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Saved Properties */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-[#DC143C]" />
                        Saved Properties
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {savedProperties.map((property) => (
                          <div
                            key={property.id}
                            className="flex gap-4 p-4 border rounded-lg hover:bg-secondary/30 transition-colors"
                          >
                            <img
                              src={property.image || "/placeholder.svg"}
                              alt={property.title}
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{property.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                              <p className="text-[#DC143C] font-bold">NPR {property.price}M</p>
                            </div>
                            <Button variant="outline" size="sm" className="self-start bg-transparent">
                              View
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0">
                            <div className="w-2 h-2 bg-[#DC143C] rounded-full mt-2" />
                            <div className="flex-1">
                              <p className="text-sm">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

const savedProperties = [
  {
    id: 1,
    title: "Luxury Villa in Budhanilkantha",
    location: "Budhanilkantha, Kathmandu",
    price: "45",
    image: "/luxury-villa-nepal-mountains.jpg",
  },
  {
    id: 2,
    title: "Modern Apartment in Lazimpat",
    location: "Lazimpat, Kathmandu",
    price: "18.5",
    image: "/modern-apartment-kathmandu.jpg",
  },
  {
    id: 3,
    title: "Lakeside House in Pokhara",
    location: "Lakeside, Pokhara",
    price: "28",
    image: "/lakeside-house-pokhara-nepal.jpg",
  },
]

const recentActivity = [
  { action: "Saved Luxury Villa in Budhanilkantha", time: "2 hours ago" },
  { action: "Viewed Modern Apartment in Lazimpat", time: "5 hours ago" },
  { action: "Contacted agent about Lakeside House", time: "1 day ago" },
  { action: "Created property alert for Kathmandu", time: "2 days ago" },
  { action: "Updated profile information", time: "3 days ago" },
]
