import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Family Law Client',
    content:
      "The team at Proficient Legal guided me through a difficult divorce with compassion and professionalism. They fought for my rights and ensured a fair settlement. I couldn't have asked for better representation.",
    avatar: 'SJ',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Property Law Client',
    content:
      'I was impressed by the thoroughness and attention to detail shown by my lawyer during my property purchase. They identified potential issues that could have caused problems later and ensured a smooth transaction.',
    avatar: 'MC',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Immigration Law Client',
    content:
      'After struggling with my visa application for months, I turned to Proficient Legal. Their expertise made all the difference. My application was approved, and I can now build my future in Australia.',
    avatar: 'PP',
    rating: 5,
  },
  {
    name: 'David Wilson',
    role: 'Business Law Client',
    content:
      'The commercial law team provided exceptional advice for my business contracts. Their strategic approach and attention to detail protected my interests and set my business up for success.',
    avatar: 'DW',
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud of the relationships we build with our clients and the
            positive outcomes we achieve together.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="pt-6">
                <div className="flex mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "{testimonial.content}"
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
