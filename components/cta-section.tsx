import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Ready to Discuss Your Legal Needs?
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Our team of experienced legal professionals is here to help you
          navigate your legal challenges. Contact us today for a consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base bg-transparent text-white border-white hover:bg-white/10"
          >
            <Link href="/bookings-payments">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
