import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Jennifer Williams',
    role: 'Managing Partner',
    specialization: 'Family Law',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    linkedin: '#',
    email: 'jennifer@proficientlegal.com.au',
  },
  {
    name: 'Robert Chen',
    role: 'Senior Partner',
    specialization: 'Property Law',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    linkedin: '#',
    email: 'robert@proficientlegal.com.au',
  },
  {
    name: 'Sophia Patel',
    role: 'Partner',
    specialization: 'Immigration Law',
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    linkedin: '#',
    email: 'sophia@proficientlegal.com.au',
  },
  {
    name: 'Michael Thompson',
    role: 'Associate',
    specialization: 'Business Law',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    linkedin: '#',
    email: 'michael@proficientlegal.com.au',
  },
];

export function TeamSection() {
  return (
    <section className="container py-16 md:py-24 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Our Legal Team
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet our experienced team of legal professionals dedicated to
          providing exceptional service and results.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden border-0 shadow-md"
          >
            <div className="relative h-80">
              <Image
                src={member.image || '/placeholder.svg'}
                alt={member.name}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground">
                {member.specialization}
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Link
                href={member.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={`mailto:${member.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
