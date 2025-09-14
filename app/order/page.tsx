"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, ArrowRight, Building, Users, Calculator } from "lucide-react"

export default function OrderPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    serviceType: "",
    projectDescription: "",
    timeline: "",
    budget: "",
    additionalServices: [] as string[],
    preferredContact: "email",
    urgency: "normal",
  })

  const serviceTypes = [
    { value: "audit", label: t.order.services.audit },
    { value: "tax", label: t.order.services.tax },
    { value: "consulting", label: t.order.services.consulting },
    { value: "accounting", label: t.order.services.accounting },
    { value: "due-diligence", label: t.order.services.dueDiligence },
    { value: "ifrs", label: t.order.services.ifrs },
    { value: "other", label: t.order.services.other },
  ]

  const industries = [
    "Technology & Software",
    "Manufacturing & Industrial",
    "Healthcare & Pharmaceuticals",
    "Financial Services",
    "Retail & E-commerce",
    "Real Estate & Construction",
    "Education & Training",
    "Non-Profit & NGOs",
    "Hospitality & Tourism",
    "Transportation & Logistics",
    "Energy & Utilities",
    "Agriculture & Food Processing",
    "Other",
  ]

  const budgetRanges = [
    { value: "under-5k", label: t.order.budgetRanges.under5k },
    { value: "5k-15k", label: t.order.budgetRanges.range5k15k },
    { value: "15k-50k", label: t.order.budgetRanges.range15k50k },
    { value: "50k-100k", label: t.order.budgetRanges.range50k100k },
    { value: "over-100k", label: t.order.budgetRanges.over100k },
    { value: "discuss", label: t.order.budgetRanges.discuss },
  ]

  const timelines = [
    { value: "urgent", label: t.order.timelines.urgent },
    { value: "1-month", label: t.order.timelines.oneMonth },
    { value: "2-3-months", label: t.order.timelines.twoThreeMonths },
    { value: "3-6-months", label: t.order.timelines.threeSixMonths },
    { value: "flexible", label: t.order.timelines.flexible },
  ]

  const additionalServiceOptions = [
    t.order.additionalServiceOptions.training,
    t.order.additionalServiceOptions.ongoingSupport,
    t.order.additionalServiceOptions.systemImplementation,
    t.order.additionalServiceOptions.processDocumentation,
    t.order.additionalServiceOptions.complianceMonitoring,
    t.order.additionalServiceOptions.regularReviews,
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email,
      content: "info@wiseresolvere.com",
      description: t.contact.emailDesc,
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: "+998 (90) 123-45-67",
      description: t.contact.phoneDesc,
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: "Tashkent, Uzbekistan",
      description: t.contact.addressDesc,
    },
    {
      icon: Clock,
      title: t.contact.response,
      content: t.contact.responseTime,
      description: t.contact.responseDesc,
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: t.order.successTitle,
      description: t.order.successDesc,
    })

    setIsSubmitting(false)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      industry: "",
      serviceType: "",
      projectDescription: "",
      timeline: "",
      budget: "",
      additionalServices: [],
      preferredContact: "email",
      urgency: "normal",
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              {t.order.title}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.order.getStarted}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.order.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-primary mb-1">{info.content}</div>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.order.requestQuote}</CardTitle>
                <CardDescription>{t.order.quoteDesc}</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      {t.order.personalInfo}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t.order.firstName} *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t.order.lastName} *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.order.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.order.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      {t.order.companyInfo}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.order.companyName} *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">{t.order.position}</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">{t.order.industry}</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t.order.selectIndustry} />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      {t.order.projectInfo}
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">{t.order.serviceType} *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange("serviceType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t.order.selectService} />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">{t.order.projectDescription} *</Label>
                      <Textarea
                        id="projectDescription"
                        placeholder={t.order.projectDescPlaceholder}
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">{t.order.timeline}</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleInputChange("timeline", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={t.order.selectTimeline} />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline.value} value={timeline.value}>
                                {timeline.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">{t.order.budget}</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.order.selectBudget} />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((budget) => (
                              <SelectItem key={budget.value} value={budget.value}>
                                {budget.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{t.order.additionalServices}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {additionalServiceOptions.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.additionalServices.includes(service)}
                            onCheckedChange={(checked) => handleAdditionalServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className="text-sm">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{t.order.contactPreferences}</h3>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-base font-medium">{t.order.preferredContact}</Label>
                        <RadioGroup
                          value={formData.preferredContact}
                          onValueChange={(value) => handleInputChange("preferredContact", value)}
                          className="mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email-contact" />
                            <Label htmlFor="email-contact">{t.order.emailContact}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="phone-contact" />
                            <Label htmlFor="phone-contact">{t.order.phoneContact}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="both" id="both-contact" />
                            <Label htmlFor="both-contact">{t.order.bothContact}</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-base font-medium">{t.order.projectUrgency}</Label>
                        <RadioGroup
                          value={formData.urgency}
                          onValueChange={(value) => handleInputChange("urgency", value)}
                          className="mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="low-urgency" />
                            <Label htmlFor="low-urgency">{t.order.lowUrgency}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="normal" id="normal-urgency" />
                            <Label htmlFor="normal-urgency">{t.order.normalUrgency}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="high-urgency" />
                            <Label htmlFor="high-urgency">{t.order.highUrgency}</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          {t.order.submittingRequest}
                        </>
                      ) : (
                        <>
                          {t.order.submitRequest}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center mt-4">{t.order.privacyNote}</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.order.whatHappensNext}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.order.whatHappensDesc}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <CardTitle>{t.order.initialReview}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t.order.initialReviewDesc}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <CardTitle>{t.order.personalContact}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t.order.personalContactDesc}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <CardTitle>{t.order.customProposal}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t.order.customProposalDesc}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
