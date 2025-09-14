"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Linkedin, Award, GraduationCap, ArrowRight } from "lucide-react"

export default function TeamPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "Makhmudov Bobur Hamroqul",
      position: t.team.director || "Director",
      image: "/bobur.jpg",
      qualification: "DipFR ACCA",
      education: [
        "Republic of Korea, CHONNAM NATIONAL UNIVERSITY (2018-2020) - World Economy (Master's degree)",
        "Tashkent Financial Institute (2012-2016) - Accounting and Auditing (Bachelor's)",
      ],
      description:
        t.team.directorDesc ||
        "Qualified accountant with extensive experience in international accounting standards and financial management.",
      email: "b.makhmudov@wiseresolvere.com",
      linkedin: "#",
    },
    {
      name: "Rakhmanov Begzod Temirovich",
      position: t.team.auditor || "Auditor",
      image: "/placeholder-ixyv8.png",
      qualification: "IFRS (ACCA)",
      education: [
        "Oxford Brookes University (2016-2020) - Accounting (BA)",
        "University of World Economy and Diplomacy (2008-2013) - World Economy and International Economic Relations (Bachelor's)",
      ],
      description:
        t.team.auditorDesc ||
        "Qualified accountant specializing in IFRS with international education and extensive auditing experience.",
      email: "b.rakhmanov@wiseresolvere.com",
      linkedin: "#",
    },
    {
      name: "Quldosheva Xolisa Kamoliddinovna",
      position: t.team.auditor || "Auditor",
      image: "/xolisa.jpg",
      qualification: "CAP",
      education: [
        "Tashkent Financial Institute (2016-2018) - Audit (Master's degree)",
        "Tashkent Financial Institute (2012-2016) - Accounting and Auditing (Bachelor's)",
      ],
      description:
        t.team.auditorDesc || "Qualified accountant with specialized expertise in auditing and financial analysis.",
      email: "x.quldosheva@wiseresolvere.com",
      linkedin: "#",
    },
    {
      name: "Mirzaev Bakhromjon Bakhodirovich",
      position: t.team.auditor || "Auditor",
      image: "/placeholder-3gtsv.png",
      qualification: "Qualified Accountant",
      education: ["Tashkent Financial Institute (2012-2016) - Accounting and Auditing (Bachelor's)"],
      description:
        t.team.auditorDesc ||
        "Qualified accountant with solid foundation in accounting principles and auditing practices.",
      email: "b.mirzaev@wiseresolvere.com",
      linkedin: "#",
    },
  ]

  const departments = [
    {
      name: "Audit Department",
      description: "Comprehensive financial auditing services",
      teamSize: "12 professionals",
      icon: Award,
    },
    {
      name: "Tax Department",
      description: "Tax planning and compliance services",
      teamSize: "8 professionals",
      icon: GraduationCap,
    },
    {
      name: "Consulting Department",
      description: "Business strategy and optimization",
      teamSize: "6 professionals",
      icon: Award,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              {t.nav.team}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t.team.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.team.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Departments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized teams dedicated to different aspects of financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <dept.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{dept.name}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {dept.teamSize}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{dept.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-background shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.position}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">
                    {member.qualification}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">{t.team.education || "Education"}:</h4>
                    <div className="space-y-1">
                      {member.education.map((edu, eduIndex) => (
                        <div key={eduIndex} className="text-xs text-muted-foreground leading-relaxed">
                          {edu}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-4 border-t">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">{t.team.joinTeam}</h2>
            <p className="text-xl opacity-90 leading-relaxed">{t.team.joinTeamDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
                asChild
              >
                <Link href="/order">
                  {t.common.contactUs}
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
