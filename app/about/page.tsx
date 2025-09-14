"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Heart, Users, Award, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t.about.expertise,
      description: t.about.expertiseText,
    },
    {
      icon: Heart,
      title: t.about.integrity,
      description: t.about.integrityText,
    },
    {
      icon: Users,
      title: t.about.partnership,
      description: t.about.partnershipText,
    },
    {
      icon: Award,
      title: t.about.excellence,
      description: t.about.excellenceText,
    },
  ]

  const milestones = [
    {
      year: "2022",
      title: t.about.founded,
      description: t.about.foundedText,
    },
    {
      year: "2023",
      title: t.about.license,
      description: t.about.licenseText,
    },
    {
      year: "2023",
      title: t.about.capital,
      description: t.about.capitalText,
    },
    {
      year: "2023",
      title: t.about.insurance,
      description: t.about.insuranceText,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              {t.nav.about}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.about.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.about.description}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.about.mission}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">{t.about.missionText}</p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.about.vision}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">{t.about.visionText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.about.values}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.valuesText}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.about.journey}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.journeyText}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-0.5"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background lg:left-1/2 lg:-translate-x-1/2 z-10"></div>

                    <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                      <Card className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Company Information</h2>
              <p className="text-xl text-muted-foreground">Official details and credentials</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">License Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  License No. 127 of the Ministry of Finance of the Republic of Uzbekistan dated January 26, 2023
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Insurance Coverage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Policy No. 03-03/0681169266-001 with coverage of 2,000,000,000 sum through O'ZBEKINVEST
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Authorized Capital</h3>
                <p className="text-muted-foreground leading-relaxed">More than 100,000,000 soums registered capital</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Led by full-time director and qualified audit professionals
                </p>
              </Card>
            </div>
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
                <Link href="/team">
                  {t.team.title}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/order">{t.cta.consultation}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
