import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full bg-slate-950">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/whoredash-logo.png"
                alt="whoredash"
                width={200}
                height={50}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Premium verified companions available 24/7. Safe, discreet, and professional services worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">Browse</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/browse" className="text-slate-400 hover:text-white transition-colors">
                  All Companions
                </Link>
              </li>
              <li>
                <Link href="/browse?category=women" className="text-slate-400 hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/browse?category=men" className="text-slate-400 hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/browse?category=trans" className="text-slate-400 hover:text-white transition-colors">
                  Trans
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-slate-400 hover:text-white transition-colors">
                  VIP Membership
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-slate-400 hover:text-white transition-colors">
                  Safety & Wellness
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-slate-400 hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-slate-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} whoredash. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                2,500+ Online
              </span>
              <span>18+ Only</span>
              <span>Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
