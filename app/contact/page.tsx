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
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email || "Email Us",
      content: "info@wiseresolvere.com",
      description: t.contact.emailDesc || "Send us an email anytime",
    },
    {
      icon: Phone,
      title: t.contact.phone || "Call Us",
      content: "+998 (90) 123-45-67",
      description: t.contact.phoneDesc || "Mon-Fri 9:00 AM - 6:00 PM",
    },
    {
      icon: MapPin,
      title: t.contact.address || "Visit Us",
      content: "Tashkent, Uzbekistan",
      description: t.contact.addressDesc || "Schedule an appointment",
    },
    {
      icon: Clock,
      title: t.contact.response || "Response Time",
      content: t.contact.responseTime || "Within 24 hours",
      description: t.contact.responseDesc || "We respond quickly",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t.contact.successTitle || "Message Sent Successfully!",
      description: t.contact.successDesc || "We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              {t.contact.title}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.contact.getInTouch || "Get In Touch"}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              {t.contact.heroDesc ||
                "Have questions about our services? Need a consultation? We're here to help. Contact us today and let's discuss how we can support your business."}
            </p>
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

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  {t.contact.sendMessage || "Send us a Message"}
                </CardTitle>
                <CardDescription>
                  {t.contact.formDesc || "Fill out the form below and we'll get back to you as soon as possible."}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.name} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t.contact.namePlaceholder || "Your full name"}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.email} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t.contact.emailPlaceholder || "your@email.com"}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.contact.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder={t.contact.phonePlaceholder || "+998 (90) 123-45-67"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t.contact.subject || "Subject"}</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder={t.contact.subjectPlaceholder || "What is this about?"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.message} *</Label>
                    <Textarea
                      id="message"
                      placeholder={
                        t.contact.messagePlaceholder ||
                        "Tell us about your inquiry, questions, or how we can help you..."
                      }
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {t.contact.sending || "Sending..."}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t.contact.send}
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    {t.contact.privacy ||
                      "By submitting this form, you agree to our privacy policy. We'll respond within 24 hours."}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t.contact.whyContactTitle || "Why Contact Wise Resolvere?"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.contact.whyContactDesc ||
                "We're committed to providing exceptional service and building lasting relationships with our clients."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t.contact.quickResponse || "Quick Response"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t.contact.quickResponseDesc || "We respond to all inquiries within 24 hours, often much sooner."}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>{t.contact.personalizedService || "Personalized Service"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t.contact.personalizedServiceDesc ||
                      "Every client receives personalized attention and tailored solutions."}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t.contact.expertAdvice || "Expert Advice"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t.contact.expertAdviceDesc ||
                      "Get professional advice from our experienced team of audit and consulting experts."}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
