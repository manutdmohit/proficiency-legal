import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/Service';
import { TestimonialsSection } from '@/components/testimonials-section';
import { TeamSection } from '@/components/team-section';
import { CtaSection } from '@/components/cta-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
