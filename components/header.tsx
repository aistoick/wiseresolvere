"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { LanguageSelector } from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/clients", label: t.nav.clients },
    { href: "/team", label: t.nav.team },
    { href: "/process", label: t.nav.process },
    { href: "/rates", label: t.nav.rates },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-wiseresolvere.png" alt="Wise Resolvere" width={180} height={60} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSelector />
            <div className="w-px h-6 bg-border"></div>
            <Link
              href="/order"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-accent shadow-sm hover:shadow-md"
            >
              {t.nav.order}
            </Link>
          </div>

          {/* Mobile: Language Selector and Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <LanguageSelector />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t pt-4 mt-2">
                <Link
                  href="/order"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-3 rounded-md text-sm font-medium transition-colors border border-accent text-center block shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.order}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
