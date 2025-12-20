"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Heart, Calendar, ChevronDown, Menu, X } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const router = useRouter()
  const { setCategory } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCategorySelect = (category: "women" | "men" | "trans") => {
    setCategory(category)
    router.push(`/browse?category=${category}`)
    setMobileMenuOpen(false)
  }

  const navButtonStyles = `
    px-4 py-2 text-sm font-semibold text-white 
    bg-white/10 backdrop-blur-sm
    border border-white/20
    rounded-lg
    shadow-[0_4px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.2)]
    hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.2)]
    hover:translate-y-[2px]
    active:shadow-none active:translate-y-[4px]
    transition-all duration-100
  `

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-primary shadow-lg">
      <div className="container flex h-auto items-center py-3 px-4 justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/whoredash-logo.png"
            alt="whoredash"
            width={512}
            height={128}
            className="h-20 md:h-32 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation with 3D Buttons */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link href="/browse" className={navButtonStyles}>
            Browse
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={`${navButtonStyles} flex items-center gap-1`}>
              Categories
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white">
              <DropdownMenuItem onClick={() => handleCategorySelect("women")} className="cursor-pointer">
                Women
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategorySelect("men")} className="cursor-pointer">
                Men
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategorySelect("trans")} className="cursor-pointer">
                Trans
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/membership" className={navButtonStyles}>
            VIP
          </Link>

          <Link href="/events" className={navButtonStyles}>
            Events
          </Link>

          <Link href="/safety" className={navButtonStyles}>
            Safety
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => router.push("/favorites")}
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => router.push("/bookings")}
            >
              <Calendar className="h-5 w-5" />
              <span className="sr-only">Bookings</span>
            </Button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 text-sm"
              onClick={() => router.push("/auth/login")}
            >
              Sign In
            </Button>
            <Button
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all duration-100"
              onClick={() => router.push("/auth/sign-up")}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-gradient-primary">
          <div className="container px-4 py-4 space-y-2">
            <Link
              href="/browse"
              className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse All
            </Link>

            <div className="px-4 py-2">
              <p className="text-xs text-white/60 mb-2 uppercase tracking-wide">Categories</p>
              <div className="space-y-1 pl-2">
                <button
                  onClick={() => handleCategorySelect("women")}
                  className="block w-full text-left px-3 py-2 text-base text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Women
                </button>
                <button
                  onClick={() => handleCategorySelect("men")}
                  className="block w-full text-left px-3 py-2 text-base text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Men
                </button>
                <button
                  onClick={() => handleCategorySelect("trans")}
                  className="block w-full text-left px-3 py-2 text-base text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Trans
                </button>
              </div>
            </div>

            <Link
              href="/membership"
              className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              VIP Membership
            </Link>

            <Link
              href="/events"
              className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>

            <Link
              href="/safety"
              className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Safety
            </Link>

            <Link
              href="/favorites"
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="h-5 w-5" />
              Favorites
            </Link>

            <Link
              href="/bookings"
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              My Bookings
            </Link>

            <hr className="border-white/20 my-4" />

            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="ghost"
                className="w-full text-white hover:bg-white/10 text-base justify-center py-3"
                onClick={() => {
                  router.push("/auth/login")
                  setMobileMenuOpen(false)
                }}
              >
                Sign In
              </Button>
              <Button
                className="w-full bg-white text-primary hover:bg-white/90 text-base font-semibold py-3"
                onClick={() => {
                  router.push("/auth/sign-up")
                  setMobileMenuOpen(false)
                }}
              >
                Join as Companion
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
