import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Heart, Lightbulb, Target, Users, Sparkles } from 'lucide-react';

const values = [
  {
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from legal strategy to client service.',
    icon: Sparkles,
  },
  {
    title: 'Integrity',
    description:
      'We uphold the highest ethical standards and are committed to honesty and transparency.',
    icon: Scale,
  },
  {
    title: 'Compassion',
    description:
      'We approach each case with empathy, understanding the human impact of legal challenges.',
    icon: Heart,
  },
  {
    title: 'Innovation',
    description:
      'We embrace creative thinking and innovative approaches to solve complex legal problems.',
    icon: Lightbulb,
  },
  {
    title: 'Client Focus',
    description:
      "We prioritize our clients' needs and goals, tailoring our services to achieve the best outcomes.",
    icon: Target,
  },
  {
    title: 'Collaboration',
    description:
      'We work together as a team and partner with our clients to achieve shared objectives.',
    icon: Users,
  },
];

export function ValuesSection() {
  return (
    <section className="container py-12 md:py-24 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Our Core Values
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          These principles guide our practice and define our commitment to our
          clients and the legal profession.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title} className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
