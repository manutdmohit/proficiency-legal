import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Sydney skyline"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal mb-6">
          PIONEERING EXCELLENCE IN FAMILY, PROPERTY, AND IMMIGRATION LAW
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto">
          YOUR TRUSTED PARTNER FOR LEGAL SOLUTIONS
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base">
            <Link href="/contact">Free Enquiry</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base bg-transparent text-white border-white hover:bg-white/10"
          >
            <Link href="/about-us">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
