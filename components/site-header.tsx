"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { Heart, Calendar, ChevronDown, Menu, X } from 'lucide-react'
import { useTheme } from "@/lib/theme-context"
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const router = useRouter()
  const { setCategory } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCategorySelect = (category: 'women' | 'men' | 'trans') => {
    setCategory(category)
    router.push(`/browse?category=${category}`)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-primary shadow-md">
      <div className="container flex h-auto flex-row text-center p-[0px90xcd56yy]00000000000000000000o9oooooooooooooooooooooooooooooooib bikoko89 ] font-thin text-xl justify-evenly py-[20] items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <Image 
            src="/whoredash-logo.png" 
            alt="whoredash" 
            width={450} 
            height={128}
            className="h-32 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/browse"
            className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors"
          >
            Browse
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 flex items-center gap-1 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors">
              Categories
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white">
              <DropdownMenuItem onClick={() => handleCategorySelect('women')} className="cursor-pointer">
                Women
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategorySelect('men')} className="cursor-pointer">
                Men
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategorySelect('trans')} className="cursor-pointer">
                Trans
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/safety"
            className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors"
          >
            Safety
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => router.push("/favorites")}>
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => router.push("/bookings")}>
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
              size="sm"
              className="bg-white text-primary hover:bg-white/90 px-[30px]"
              onClick={() => router.push("/auth/sign-up")}
            >
              Join as Companion
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-gradient-primary">
          <div className="container px-4 py-4 space-y-2">
            <Link
              href="/browse"
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </Link>
            
            <DropdownMenu open={true}>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 flex items-center gap-1 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors">
                Categories
                <ChevronDown className="h-4 w-4 ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white w-40">
                <DropdownMenuItem onClick={() => handleCategorySelect('women')} className="cursor-pointer">
                  Women
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCategorySelect('men')} className="cursor-pointer">
                  Men
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCategorySelect('trans')} className="cursor-pointer">
                  Trans
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/safety"
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Safety
            </Link>

            <Link
              href="/favorites"
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="h-4 w-4" />
              Favorites
            </Link>

            <Link
              href="/bookings"
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              My Bookings
            </Link>

            <hr className="border-white/20 my-3" />

            <Button
              variant="ghost"
              className="w-full text-white hover:bg-white/10 text-sm justify-start"
              onClick={() => {
                router.push("/auth/login")
                setMobileMenuOpen(false)
              }}
            >
              Sign In
            </Button>
            <Button
              className="w-full bg-white text-primary hover:bg-white/90 text-sm"
              onClick={() => {
                router.push("/auth/sign-up")
                setMobileMenuOpen(false)
              }}
            >
              Join as Companion
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
