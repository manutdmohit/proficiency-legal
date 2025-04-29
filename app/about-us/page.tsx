import { PageHeader } from '@/components/page-header';
import { TeamSection } from '@/components/team-section';
import { ValuesSection } from '@/components/values-section';
import Image from 'next/image';
import { Building, Mail, Phone, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About Us"
        description="Learn more about Proficient Legal and our commitment to excellence"
      />

      <section className="container py-12 md:py-24 lg:py-32 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Our Story
            </h2>

            <p className="text-muted-foreground mb-6">
              Welcome to Proficient Legal, a distinguished law firm nestled in
              the vibrant city of Sydney, Australia. Situated in the heart of
              this bustling metropolis, we stand as a pillar of legal expertise,
              providing individuals, businesses, and organizations with
              comprehensive legal services specializing in property, family, and
              immigration law.
            </p>

            <p className="text-muted-foreground mb-6">
              At Proficient Legal, we understand that exceptional service is
              rooted in attentive listening. We pride ourselves on being
              pragmatic and diligent, ensuring that we carefully consider your
              legal matters before delivering thoughtful solutions. Our team has
              garnered a reputation for technical mastery, a testament to their
              dedication and expertise in navigating complex issues to pave the
              way for the right solutions.
            </p>

            <p className="text-muted-foreground mb-6">
              A cornerstone of our approach is the cultivation of a culture
              built on collaboration and transparency. This ethos positions us
              as authentic leaders in law, allowing us to bring added value to
              our clients and the community at large. We are committed to
              fostering long-term relationships, tailoring our services to
              accompany our clients at every step of their journey.
            </p>

            <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-3">Our Commitment</h3>
              <p className="text-muted-foreground">
                Our commitment to respect extends to others, the law, and the
                broader impact of our work. Guided by integrity, we lead you
                through legal challenges with a pragmatic mindset, ensuring the
                right outcomes and relieving you of any legal concerns, enabling
                you to move forward with confidence.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="bg-primary/10 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M16 18h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M16 10h.01"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base">
                  Multilingual Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proficient Legal is proud to house a team of multilingual
                  lawyers proficient in English, Hindi, Urdu, Nepali, and
                  Bengali. This diversity in language ensures that we can
                  effectively communicate and cater to the unique needs of our
                  diverse clientele.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Proficient Legal team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16 bg-slate-50 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground italic mb-8">
            "In Sydney and beyond, Proficient Legal stands as a beacon of legal
            excellence, offering not just legal services but a partnership
            dedicated to your success."
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 mx-auto">
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/contact-qr-code.png"
                  alt="Proficient Legal Contact QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-center text-muted-foreground mt-4">
                Tap or scan the code to add us to your contacts!
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Connect With Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">
                      PROFICIENT LEGAL
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Your trusted legal partner
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">EMAIL</h3>
                    <a
                      href="mailto:INFO@PROFICIENTLEGAL.COM.AU"
                      className="text-sm text-primary hover:underline"
                    >
                      INFO@PROFICIENTLEGAL.COM.AU
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">PHONE</h3>
                    <a
                      href="tel:1300011581"
                      className="text-sm text-primary hover:underline"
                    >
                      1300 011 581
                    </a>
                  </div>
                </div>

                <Button asChild className="w-full mt-6">
                  <Link href="/contact">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Contact Us Today
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <TeamSection />
    </div>
  );
}
