'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Calendar } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'FAMILY LAW', href: '/family-law' },
  { label: 'PROPERTY LAW', href: '/property-law' },
  { label: 'IMMIGRATION LAW', href: '/immigration-law' },
  { label: 'BOOK A CONSULTATION', href: '/book-consultant' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <Image
                src="/images/logo.png"
                alt="Proficient Legal Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden font-bold sm:inline-block">
              Proficient Legal
            </span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 ">
          <Link href="/contact" className="hidden md:block">
            <Button variant="outline" size="sm" className="cursor-pointer">
              Contact Us
            </Button>
          </Link>

          <Link
            href="/book-consultant"
            className="hidden md:block  cursor-pointer"
          >
            <Button size="sm" className="cursor-pointer">
              <Calendar className="h-4 w-4 mr-2" />
              Book a Consultation
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cfhpAvPzZrNF6x5YS2PPv5bTb21dJI.png"
                      alt="Proficient Legal Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="font-bold">Proficient Legal</span>
                </Link>

                <nav className="grid gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-primary"
                  >
                    CONTACT US
                  </Link>
                  <Link
                    href="/book-consultant"
                    className="text-sm font-medium hover:text-primary"
                  >
                    BOOK A CONSULTATION
                  </Link>
                </nav>

                <div className="flex flex-col gap-2 mt-4">
                  <Button>Book a Consultation</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
