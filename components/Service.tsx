import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Scale, Home, Globe, Users, FileText, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Family Law',
    description:
      'Expert guidance for divorce, child custody, property settlements, and all family matters.',
    icon: Users,
    href: '/family-law',
  },
  {
    title: 'Property Law',
    description:
      'Comprehensive legal services for property transactions, leasing, and disputes.',
    icon: Home,
    href: '/property-law',
  },
  {
    title: 'Immigration Law',
    description:
      'Specialized assistance for all visa applications, appeals, and citizenship matters.',
    icon: Globe,
    href: '/immigration-law',
  },
  {
    title: 'Wills & Estates',
    description:
      'Professional advice on wills, estate planning, probate, and contested wills.',
    icon: FileText,
    href: '/wills-estates',
  },
  {
    title: 'Business Law',
    description:
      'Legal support for business formation, contracts, compliance, and commercial disputes.',
    icon: Scale,
    href: '/business-law',
  },
  {
    title: 'Dispute Resolution',
    description:
      'Effective strategies for mediation, arbitration, and litigation across various legal matters.',
    icon: Shield,
    href: '/dispute-resolution',
  },
];

export function ServicesSection() {
  return (
    <section className="container py-16 md:py-24 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Our Legal Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide comprehensive legal services across multiple practice
          areas, delivering exceptional results with a client-centered approach.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className="group hover:shadow-md transition-all"
          >
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {service.description}
              </CardDescription>
              <Button asChild variant="link" className="p-0 h-auto font-medium">
                <Link href={service.href}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
