"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Calculator, TrendingUp, FileText, Users, Award, Target } from "lucide-react"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  // Updated services (Russian titles) — no prices
  const mainServices = [
    {
      icon: Shield,
      title: "Аудиторские услуги",
      description: "", // optional: add text later or connect to i18n
      features: [] as string[],
    },
    {
      icon: Calculator,
      title: "Налоговый консалтинг",
      description: "",
      features: [],
    },
    {
      icon: FileText,
      title: "Трансформация годовых отчётов в соответствии международными стандартами",
      description: "",
      features: [],
    },
    {
      icon: FileText,
      title: "Бухгалтерские услуги",
      description: "",
      features: [],
    },
    {
      icon: TrendingUp,
      title: "Финансово-экономический анализ деятельности предприятий",
      description: "",
      features: [],
    },
  ]

  // You can keep or remove additional services section. Keeping structure empty for now.
  const additionalServices: { title: string; description: string; icon: any }[] = []

  const processSteps = [
    { step: "01", title: t.services.step1Title, description: t.services.step1Desc },
    { step: "02", title: t.services.step2Title, description: t.services.step2Desc },
    { step: "03", title: t.services.step3Title, description: t.services.step3Desc },
    { step: "04", title: t.services.step4Title, description: t.services.step4Desc },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              {t.nav.services}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.services.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        {/* duration removed */}
                      </div>
                    </div>
                    {/* Price block removed */}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {service.description && (
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  )}

                  {service.features && service.features.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">{t.services.whatsIncluded}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button className="w-full" asChild>
                    <Link href="/order">
                      {t.services.getStarted}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services (optional) */}
      {additionalServices.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.services.additionalServicesTitle}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.services.additionalServicesSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.services.processTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.services.processSubtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-0.5"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
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
                <Link href="/order">
                  {t.order.requestQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/rates">{t.cta.viewRates}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
