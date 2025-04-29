import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container py-12 mx-auto md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="Proficient Legal Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-white">Proficient Legal</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Providing exceptional legal services in family, property, and
              immigration law since 2010.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="https://facebook.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/family-law"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/property-law"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Property Law
                </Link>
              </li>
              <li>
                <Link
                  href="/immigration-law"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Immigration Law
                </Link>
              </li>
              <li>
                <Link
                  href="/wills-estates"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Wills & Estates
                </Link>
              </li>
              <li>
                <Link
                  href="/business-law"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Business Law
                </Link>
              </li>
              <li>
                <Link
                  href="/dispute-resolution"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Dispute Resolution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-team"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/bookings-payments"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Bookings & Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/book-consultant"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="grid gap-3">
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">
                  Level 10, 123 Pitt Street
                  <br />
                  Sydney, NSW 2000
                  <br />
                  Australia
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">(02) 9876 5432</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">
                  info@proficientlegal.com.au
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium text-white text-sm mb-2">
                Subscribe to our newsletter
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
                />
                <Button size="sm" className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 mx-auto">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Proficient Legal. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
