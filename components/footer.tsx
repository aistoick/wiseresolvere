"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image src="/logo-wiseresolvere.png" alt="Wise Resolvere" width={180} height={60} className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground">{t.about.description}</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  {t.nav.team}
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-muted-foreground hover:text-primary">
                  {t.nav.process}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/rates" className="text-muted-foreground hover:text-primary">
                  {t.nav.rates}
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-muted-foreground hover:text-primary">
                  {t.nav.clients}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@wiseresolvere.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +998 (90) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Wise Resolvere. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
