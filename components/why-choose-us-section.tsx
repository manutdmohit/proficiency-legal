import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  Clock,
  HeartHandshake,
  Scale,
  Briefcase,
  Users,
} from 'lucide-react';

const reasons = [
  {
    title: 'Expertise & Experience',
    description:
      'Our team of highly qualified lawyers brings decades of combined experience across all areas of practice.',
    icon: Briefcase,
  },
  {
    title: 'Client-Centered Approach',
    description:
      'We prioritize your needs and concerns, providing personalized solutions tailored to your specific situation.',
    icon: Users,
  },
  {
    title: 'Proven Track Record',
    description:
      'We have a history of successful outcomes and satisfied clients across all our practice areas.',
    icon: Award,
  },
  {
    title: 'Transparent Communication',
    description:
      'We keep you informed at every stage of your case with clear, jargon-free explanations.',
    icon: HeartHandshake,
  },
  {
    title: 'Ethical Practice',
    description:
      'We adhere to the highest ethical standards, ensuring integrity in all our professional dealings.',
    icon: Scale,
  },
  {
    title: 'Responsive Service',
    description:
      'We understand the importance of timely communication and are committed to responding promptly to your needs.',
    icon: Clock,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Proficient Legal, we are committed to excellence in legal service
            delivery. Here's what sets us apart:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <Card key={reason.title} className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
