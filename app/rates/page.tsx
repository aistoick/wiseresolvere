"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight, Star, Clock, Users, Building } from "lucide-react"

export default function RatesPage() {
  const { t } = useLanguage()

  const pricingPlans = [
    {
      name: t.rates.basic,
      description: t.rates.basicDesc,
      price: t.rates.basicPrice,
      period: "/month",
      popular: false,
      icon: Users,
      features: t.rates.basicFeatures,
      limitations: ["Up to 50 transactions/month", "Single business entity", "Standard reporting only"],
    },
    {
      name: t.rates.professional,
      description: t.rates.professionalDesc,
      price: t.rates.professionalPrice,
      period: "/month",
      popular: true,
      icon: Building,
      features: t.rates.professionalFeatures,
      limitations: ["Up to 200 transactions/month", "Multiple business entities", "Custom reporting available"],
    },
    {
      name: t.rates.enterprise,
      description: t.rates.enterpriseDesc,
      price: t.rates.contactForPricing,
      period: "",
      popular: false,
      icon: Star,
      features: t.rates.enterpriseFeatures,
      limitations: ["Unlimited transactions", "Complex business structures", "Fully customized solutions"],
    },
  ]

  const auditServices = [
    {
      service: "Small Business Audit",
      description: "Annual revenue under $1M",
      price: "$2,500 - $5,000",
      duration: "2-3 weeks",
    },
    {
      service: "Medium Business Audit",
      description: "Annual revenue $1M - $10M",
      price: "$5,000 - $15,000",
      duration: "3-5 weeks",
    },
    {
      service: "Large Enterprise Audit",
      description: "Annual revenue over $10M",
      price: "$15,000+",
      duration: "6-12 weeks",
    },
    {
      service: "Internal Audit",
      description: "Process and control review",
      price: "$3,000 - $8,000",
      duration: "2-4 weeks",
    },
  ]

  const consultingRates = [
    {
      level: "Senior Consultant",
      rate: "$150/hour",
      description: "Strategic planning and analysis",
    },
    {
      level: "Principal Consultant",
      rate: "$200/hour",
      description: "Complex business transformations",
    },
    {
      level: "Managing Partner",
      rate: "$250/hour",
      description: "Executive-level consulting",
    },
  ]

  const additionalServices = [
    { service: "Tax Return Preparation (Individual)", price: "$200 - $500" },
    { service: "Tax Return Preparation (Corporate)", price: "$800 - $2,000" },
    { service: "VAT Registration & Setup", price: "$300 - $600" },
    { service: "Financial Statement Preparation", price: "$500 - $1,500" },
    { service: "Due Diligence Review", price: "$2,000 - $8,000" },
    { service: "IFRS Conversion", price: "$3,000 - $10,000" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              {t.nav.rates}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.rates.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.rates.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Monthly Service Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ongoing accounting and consulting services with predictable monthly pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-xl scale-105" : ""} hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-lg text-muted-foreground font-normal">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Included Services:</h4>
                    <div className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Package Limits:</h4>
                    <div className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="/order">
                      {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Services Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Audit Services Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional audit services priced based on company size and complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {auditServices.map((audit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{audit.service}</CardTitle>
                      <CardDescription className="mt-1">{audit.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{audit.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">{audit.price}</div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/order">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Rates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Consulting Hourly Rates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible hourly consulting services for specialized business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {consultingRates.map((consultant, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{consultant.level}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{consultant.rate}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{consultant.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One-time services and specialized offerings
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {additionalServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                    >
                      <div className="font-medium">{service.service}</div>
                      <div className="text-primary font-semibold">{service.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">{t.rates.custom}</h2>
            <p className="text-xl opacity-90 leading-relaxed">{t.rates.customDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
                asChild
              >
                <Link href="/order">
                  {t.rates.getQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
