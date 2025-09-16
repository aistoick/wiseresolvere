"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
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

type PartnerKey =
  | "angren"
  | "cda"
  | "compact"
  | "elegant"
  | "enter"
  | "goldenfish"
  | "next"
  | "sochnaya"
  | "soteryan"
  | "viko"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    { icon: Shield, title: t.services?.audit, description: t.services?.auditDesc },
    { icon: TrendingUp, title: t.services?.consulting, description: t.services?.consultingDesc },
    { icon: Calculator, title: t.services?.tax, description: t.services?.taxDesc },
    { icon: FileText, title: t.services?.accounting, description: t.services?.accountingDesc },
  ]

  const stats = [
    { number: "500+", label: t.stats?.clientsServed || "Clients Served" },
    { number: "8+", label: t.stats?.yearsExperience || "Years Experience" },
    { number: "98%", label: t.stats?.clientSatisfaction || "Client Satisfaction" },
    { number: "24/7", label: t.stats?.supportAvailable || "Support Available" },
  ]

  const benefits: string[] = [
    t.benefits?.certifiedAuditors || "Professional certified auditors",
    t.benefits?.financialAnalysis || "Comprehensive financial analysis",
    t.benefits?.compliance || "Regulatory compliance expertise",
    t.benefits?.customSolutions || "Customized business solutions",
    t.benefits?.multilingualSupport || "Multilingual support team",
    t.benefits?.competitivePricing || "Competitive pricing structure",
  ]

  const partners: { key: PartnerKey; logo: string }[] = [
    { key: "angren", logo: "/partners/angren.svg" },
    { key: "cda", logo: "/partners/center.png" },
    { key: "compact", logo: "/partners/compact.png" },
    { key: "elegant", logo: "/partners/elegant.jpg" },
    { key: "enter", logo: "/partners/enter_engineering.png" },
    { key: "goldenfish", logo: "/partners/goldenfish.png" },
    { key: "next", logo: "/partners/nextmall.png" },
    { key: "sochnaya", logo: "/partners/sochnaya-dolina.png" },
    { key: "soteryan", logo: "/partners/soteryan.svg" },
    { key: "viko", logo: "/partners/viko.png" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section - compact padding + improved layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10
        pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
        {/* gradient shimmers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
            {/* Left */}
            <div className="space-y-8">
              {/* trust badge */}
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm backdrop-blur">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {t.hero?.trustBadge || "Trusted by 500+ businesses"}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight text-balance lg:text-6xl">
                  {t.hero?.title}
                </h1>
                <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
                  {t.hero?.subtitle}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="px-8 text-lg" asChild>
                  <Link href="/order">
                    {t.hero?.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent px-8 text-lg" asChild>
                  <Link href="/services">{t.nav?.services}</Link>
                </Button>
              </div>

              {/* mini stats */}
              <div className="grid grid-cols-2 gap-6 pt-2 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats?.yearsExperience || "Years Experience"}
                    </div>
                    <div className="text-lg font-semibold">
                      {t.hero?.yearsExperience || "15+ Years Experience"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats?.clientsServed || "Clients Served"}
                    </div>
                    <div className="text-lg font-semibold">
                      {t.hero?.clientsSatisfied || "500+ Satisfied Clients"}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <PieChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats?.supportAvailable || "Support"}
                    </div>
                    <div className="text-lg font-semibold">
                      {t.hero?.projectsCompleted || "1000+ Projects Completed"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative rounded-2xl border bg-card p-4 shadow-xl">
                {/* hero image — o'zingiznikini public/ ichiga qo'ying */}
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/hero-audit.png"
                    alt="Wise Resolvere — Audit & Consulting"
                    width={960}
                    height={720}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                {/* floating badges */}
                <div className="pointer-events-none absolute -left-4 top-6 hidden md:block">
                  <div className="rounded-xl border bg-background/80 px-4 py-2 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm">{t.features?.qualityAssurance || "Quality Assurance"}</span>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-4 bottom-6 hidden md:block">
                  <div className="rounded-xl border bg-background/80 px-4 py-2 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      <span className="text-sm">{t.features?.dataAnalytics || "Data Analytics"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle glow */}
              <div className="absolute -bottom-8 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.services?.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.services?.subtitle || "Comprehensive audit and consulting services tailored to your business needs"}
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
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
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
                <h2 className="text-3xl lg:text-4xl font-bold">
                  {t.whyChoose?.title || "Why Choose Wise Resolvere?"}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.whyChoose?.subtitle ||
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
                  {t.whyChoose?.learnMore || "Learn More About Us"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.enterprise || "Enterprise Solutions"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.enterpriseDesc || "Scalable audit solutions for large organizations"}
                </p>
              </Card>

              <Card className="p-6 text-center mt-8">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.expertTeam || "Expert Team"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.expertTeamDesc || "Certified professionals with extensive experience"}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.dataAnalytics || "Data Analytics"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.dataAnalyticsDesc || "Advanced analytics for better business insights"}
                </p>
              </Card>

              <Card className="p-6 text-center mt-8">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.features?.qualityAssurance || "Quality Assurance"}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.features?.qualityAssuranceDesc || "Rigorous quality control processes"}
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
            <h2 className="text-3xl lg:text-4xl font-bold">{t.cta?.title || "Ready to Get Started?"}</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              {t.cta?.subtitle ||
                "Contact us today for a free consultation and discover how we can help your business achieve its financial goals."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/order">
                  {t.cta?.consultation || "Get Free Consultation"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/rates">{t.cta?.viewRates || "View Our Rates"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              {t.partners?.title || "Bizga ishonch bildirganlar"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.partners?.subtitle || "Yetakchi kompaniyalar hamkorligimizdan mamnun"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((p) => {
              const name = t.partners?.items?.[p.key] ?? p.key
              return (
                <div
                  key={p.key}
                  className="rounded-xl bg-white border shadow-sm hover:shadow-md transition
                           aspect-[16/9] flex items-center justify-center p-4"
                  title={name}
                >
                  <Image
                    src={p.logo}
                    alt={name}
                    width={240}
                    height={120}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
