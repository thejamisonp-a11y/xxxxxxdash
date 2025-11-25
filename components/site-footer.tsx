import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-slate-950">
      <div className="container px-4 py-12 md:px-6 md:py-[auto]">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and description */}
          <div className="space-y-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <Image
                src="/whoredash-logo.png"
                alt="whoredash"
                width={160}
                height={40}
                className="h-32 w-auto"
                priority
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">Premium companions, available 24/7.</p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold text-white uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/browse" className="text-slate-400 hover:text-white transition-colors">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-slate-400 hover:text-white transition-colors">
                  VIP Membership
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-slate-400 hover:text-white transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold text-white uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-slate-400 hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} whoredash. All rights reserved. | 18+ Only.
          </p>
        </div>
      </div>
    </footer>
  )
}
