import { PageHeader } from '@/components/page-header';
import { ConsultationBookingForm } from '@/components/consultation-booking-form';
import { ConsultantsList } from '@/components/consultants-list';
import { ConsultationFaq } from '@/components/consultation-faq';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CalendarRange, Clock, CreditCard, InfoIcon } from 'lucide-react';

export default function BookConsultant() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Book a Consultation"
        description="Schedule a meeting with our experienced legal team to discuss your legal needs"
      />

      <section className="container py-12 md:py-20 mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Why Book a Consultation?
            </h2>
            <p className="text-muted-foreground mb-4">
              An initial consultation with one of our legal experts allows us to
              understand your specific situation, provide preliminary advice,
              and outline potential strategies for your legal matter.
            </p>
            <p className="text-muted-foreground mb-6">
              Our consultations are tailored to your needs and can be conducted
              in-person at our Sydney office, via video conference, or by phone
              call for your convenience.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Duration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Initial consultations typically last 45-60 minutes
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Fee Structure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    $250 for a 60-minute consultation with an expert lawyer
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <CalendarRange className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Availability</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Monday-Friday, 9:00 AM - 5:00 PM, with select evening slots
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <InfoIcon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Preparation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Please bring all relevant documents to facilitate the
                    discussion
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col">
            <Card>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
                <CardDescription>
                  Your consultation will include the following steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium leading-7">
                        Initial Assessment
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        We'll discuss your situation and understand your legal
                        needs in detail
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium leading-7">Legal Advice</h3>
                      <p className="text-sm text-muted-foreground">
                        Our expert will provide preliminary advice based on the
                        information provided
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium leading-7">
                        Strategy Discussion
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        We'll outline potential approaches to your matter and
                        next steps
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium leading-7">
                        Cost Transparency
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        We'll provide an estimate of fees and costs for
                        proceeding with your matter
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="book" className="w-full max-w-4xl mx-auto mt-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="book">Book a Consultation</TabsTrigger>
            <TabsTrigger value="consultants">Our Consultants</TabsTrigger>
          </TabsList>
          <TabsContent value="book">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Consultation</CardTitle>
                <CardDescription>
                  Complete the form below to request a consultation with one of
                  our legal experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ConsultationBookingForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="consultants">
            <Card>
              <CardHeader>
                <CardTitle>Our Legal Consultants</CardTitle>
                <CardDescription>
                  All consultations are with qualified lawyers specializing in
                  your area of need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ConsultantsList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <ConsultationFaq />
    </div>
  );
}
