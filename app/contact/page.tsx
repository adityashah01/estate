"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const formData = {
      name: target.name.value,
      email: target.email.value,
      phone: target.phone.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        const data = await res.json();
        alert("Error sending message: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#DC143C] to-[#B8112E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-0">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have questions? We're here to help you find your dream property in Nepal
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Full Name *</label>
                        <Input name="name" placeholder="Enter your name" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email Address *</label>
                        <Input type="email" name="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                        <Input type="tel" name="phone" placeholder="+977-98XXXXXXXX" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Subject</label>
                        <select
                          name="subject"
                          className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#DC143C]"
                        >
                          <option>General Inquiry</option>
                          <option>Property Viewing</option>
                          <option>Buying Property</option>
                          <option>Selling Property</option>
                          <option>Agent Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us how we can help you..."
                        className="min-h-[150px] resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#DC143C] hover:bg-[#B8112E] text-white"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#DC143C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#DC143C]" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Office Address</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Durbar Marg, Kathmandu 44600, Nepal
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#DC143C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-[#DC143C]" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <a href="tel:+97714234567" className="text-sm text-[#DC143C] hover:underline">
                          +977-1-4234567
                        </a>
                        <br />
                        <a href="tel:+9779841234567" className="text-sm text-[#DC143C] hover:underline">
                          +977-984-1234567
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#DC143C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#DC143C]" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a href="mailto:info@nepalestate.com" className="text-sm text-[#DC143C] hover:underline">
                          info@nepalestate.com
                        </a>
                        <br />
                        <a href="mailto:support@nepalestate.com" className="text-sm text-[#DC143C] hover:underline">
                          support@nepalestate.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#DC143C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-[#DC143C]" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Quick Response</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Need immediate assistance? Our team typically responds within 2 hours during business hours.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-0">
              <div className="h-[400px] bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2615!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nepal Estate Office Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
