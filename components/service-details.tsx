import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Service {
  title: string;
  description: string;
}

interface ServiceDetailsProps {
  title: string;
  description: string;
  image: string;
  services: Service[];
}

export function ServiceDetails({
  title,
  description,
  image,
  services,
}: ServiceDetailsProps) {
  return (
    <section className="container py-12 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={image || '/placeholder.svg'}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8">{description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
