"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Truck, Monitor, Factory, Building2, Heart, Coffee, Star, Quote, ArrowRight } from "lucide-react"

export default function ClientsPage() {
  const { t } = useLanguage()

  const clientTypes = [
    {
      icon: Truck,
      title: "Transport Companies",
      description: "Comprehensive accounting and audit services for transportation and logistics companies.",
      services: ["Fleet accounting", "Route optimization analysis", "Regulatory compliance", "Cost management"],
      examples: ["Freight companies", "Taxi services", "Delivery services", "Logistics providers"],
    },
    {
      icon: Monitor,
      title: "IT Companies",
      description: "Specialized financial services for technology companies and software development firms.",
      services: [
        "Software revenue recognition",
        "R&D tax credits",
        "Intellectual property valuation",
        "Growth planning",
      ],
      examples: ["Software companies", "Web development", "Mobile app developers", "Tech startups"],
    },
    {
      icon: Factory,
      title: "Production",
      description: "Manufacturing and production companies with complex inventory and cost accounting needs.",
      services: ["Cost accounting", "Inventory audits", "Production efficiency analysis", "Supply chain finance"],
      examples: ["Manufacturing plants", "Food processing", "Textile production", "Industrial equipment"],
    },
    {
      icon: Building2,
      title: "Wholesale Companies",
      description: "Wholesale and distribution businesses requiring specialized inventory and sales accounting.",
      services: ["Inventory management", "Sales audit", "Distribution analysis", "Supplier accounting"],
      examples: ["Import/export companies", "Distributors", "Wholesale traders", "Supply companies"],
    },
    {
      icon: Heart,
      title: "Clinics and Medical Centers",
      description: "Healthcare organizations with specialized accounting and compliance requirements.",
      services: ["Medical billing audit", "Healthcare compliance", "Insurance accounting", "Practice management"],
      examples: ["Private clinics", "Medical centers", "Dental practices", "Specialized healthcare"],
    },
    {
      icon: Coffee,
      title: "Cafes and Restaurants",
      description: "Food service businesses with unique accounting needs for inventory, sales, and operations.",
      services: ["Food cost analysis", "POS system integration", "Inventory tracking", "Profit optimization"],
      examples: ["Restaurants", "Cafes", "Fast food chains", "Catering services"],
    },
  ]

  const clientStats = [
    { number: "500+", label: "Active Clients" },
    { number: "15+", label: "Industries Served" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "25+", label: "Countries Served" },
  ]

  const industries = [
    "Transport & Logistics",
    "Information Technology",
    "Manufacturing & Production",
    "Wholesale & Distribution",
    "Healthcare & Medical",
    "Food & Beverage",
    "Construction & Real Estate",
    "Retail & E-commerce",
    "Financial Services",
    "Education & Training",
    "Agriculture & Processing",
    "Energy & Utilities",
  ]

  const testimonials = [
    {
      name: "Alisher Karimov",
      position: "CEO, TransLogistics LLC",
      company: "Transport Company",
      content:
        "Wise Resolvere has been instrumental in helping us manage our fleet accounting and regulatory compliance. Their expertise in transport industry is exceptional.",
      rating: 5,
    },
    {
      name: "Dilnoza Abdullayeva",
      position: "Founder, TechSolutions",
      company: "IT Company",
      content:
        "As a growing IT company, we needed specialized accounting support. Wise Resolvere understands our industry and has helped us optimize our financial processes.",
      rating: 5,
    },
    {
      name: "Bobur Rahimov",
      position: "Production Director",
      company: "Manufacturing Company",
      content:
        "Their comprehensive approach to production accounting and cost analysis has significantly improved our operational efficiency and profitability.",
      rating: 5,
    },
    {
      name: "Sevara Nazarova",
      position: "Medical Director",
      company: "Health Clinic",
      content:
        "Wise Resolvere's expertise in healthcare accounting has streamlined our billing processes and ensured full compliance with medical industry regulations.",
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              {t.nav.clients}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.clients.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.clients.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Client Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with diverse organizations, each with unique accounting and audit requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <client.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{client.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{client.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Services We Provide:</h4>
                    <div className="space-y-1">
                      {client.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-sm text-muted-foreground">
                          • {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across multiple industries and sectors
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-sm font-medium">{industry}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from some of our satisfied clients about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star key={starIndex} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed italic">
                        "{testimonial.content}"
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">{t.cta.title}</h2>
            <p className="text-xl opacity-90 leading-relaxed">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/order">
                  {t.common.getStarted}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/services">{t.nav.services}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
