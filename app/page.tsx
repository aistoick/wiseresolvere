"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  PieChart,
  Building,
} from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t.services.audit,
      description: t.services.auditDesc,
    },
    {
      icon: TrendingUp,
      title: t.services.consulting,
      description: t.services.consultingDesc,
    },
    {
      icon: Calculator,
      title: t.services.tax,
      description: t.services.taxDesc,
    },
    {
      icon: FileText,
      title: t.services.accounting,
      description: t.services.accountingDesc,
    },
  ]

  const stats = [
    { number: "500+", label: t.stats.clientsServed || "Clients Served" },
    { number: "10+", label: t.stats.yearsExperience || "Years Experience" },
    { number: "98%", label: t.stats.clientSatisfaction || "Client Satisfaction" },
    { number: "24/7", label: t.stats.supportAvailable || "Support Available" },
  ]

  const benefits = [
    t.benefits.certifiedAuditors || "Professional certified auditors",
    t.benefits.financialAnalysis || "Comprehensive financial analysis",
    t.benefits.compliance || "Regulatory compliance expertise",
    t.benefits.customSolutions || "Customized business solutions",
    t.benefits.multilingualSupport || "Multilingual support team",
    t.benefits.competitivePricing || "Competitive pricing structure",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {t.hero.badge || "Professional Audit Company"}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">{t.hero.title}</h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.hero.subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/order">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/services">{t.nav.services}</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-xl border">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle || "Comprehensive audit and consulting services tailored to your business needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">{t.whyChoose.title || "Why Choose Wise Resolvere?"}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.whyChoose.subtitle ||
                    "We combine expertise, technology, and personalized service to deliver exceptional results for your business."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-fit" asChild>
                <Link href="/about">
                  {t.whyChoose.learnMore || "Learn More About Us"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features.enterprise || "Enterprise Solutions"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features.enterpriseDesc || "Scalable audit solutions for large organizations"}
                </p>
              </Card>

              <Card className="p-6 text-center mt-8">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features.expertTeam || "Expert Team"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features.expertTeamDesc || "Certified professionals with extensive experience"}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features.dataAnalytics || "Data Analytics"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features.dataAnalyticsDesc || "Advanced analytics for better business insights"}
                </p>
              </Card>

              <Card className="p-6 text-center mt-8">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features.qualityAssurance || "Quality Assurance"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features.qualityAssuranceDesc || "Rigorous quality control processes"}
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
            <h2 className="text-3xl lg:text-4xl font-bold">{t.cta.title || "Ready to Get Started?"}</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              {t.cta.subtitle ||
                "Contact us today for a free consultation and discover how we can help your business achieve its financial goals."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/order">
                  {t.cta.consultation || "Get Free Consultation"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/rates">{t.cta.viewRates || "View Our Rates"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
