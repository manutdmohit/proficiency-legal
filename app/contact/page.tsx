import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our legal team"
      />

      <section className="container py-12 md:py-24 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8655401141396!2d151.20544631521252!3d-33.86832728065652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f3298a729%3A0x11c41f8c7c0b8ef!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location map"
              ></iframe>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Contact Information
              </h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">
                      Level 10, 123 Pitt Street
                      <br />
                      Sydney, NSW 2000
                      <br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(02) 9876 5432</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      info@proficientlegal.com.au
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:30 PM
                      <br />
                      Saturday: By appointment only
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
