import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const consultationFaqs = [
  {
    question: 'How do I prepare for my consultation?',
    answer:
      'To make the most of your consultation, prepare a brief timeline of events related to your legal matter, gather relevant documents (contracts, correspondence, court papers, etc.), and write down your key questions. This preparation helps us provide more accurate advice during our limited time together.',
  },
  {
    question: 'What happens after the initial consultation?',
    answer:
      "Following your consultation, we'll send you a summary of the advice provided and recommended next steps. If you decide to proceed with our services, we'll provide a detailed cost agreement outlining the scope of work, expected timeframes, and fee structure for your approval before commencing work on your matter.",
  },
  {
    question: 'Can I change my consultation time after booking?',
    answer:
      "Yes, you can reschedule your consultation with at least 24 hours' notice without any penalty. For changes with less than 24 hours' notice, a rebooking fee may apply. Please contact our office  For changes with less than 24 hours' notice, a rebooking fee may apply. Please contact our office as soon as possible if you need to reschedule.",
  },
  {
    question: 'Is the consultation fee refundable?',
    answer:
      "The consultation fee is non-refundable if you attend the consultation. However, if you cancel with more than 48 hours' notice, we will provide a full refund. If you later engage our services for the same matter, we may credit the consultation fee toward your overall legal costs, depending on the nature and scope of your case.",
  },
  {
    question: 'Will the lawyer I consult with handle my case?',
    answer:
      "In most cases, the lawyer you consult with will be the one to handle your matter if you choose to proceed. However, in some instances, based on case complexity or specialization requirements, we may recommend another lawyer in our firm better suited to your specific needs. We'll always discuss this with you before making any changes.",
  },
  {
    question: 'How long will it take to get an appointment?',
    answer:
      'For standard consultations, we typically offer appointments within 1-2 weeks. For urgent matters, we make every effort to accommodate appointments within 48-72 hours, subject to availability and possibly an urgent consultation fee. The booking system shows our currently available slots.',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'We do not offer free general consultations as we believe in providing valuable, specific legal advice from the first meeting. However, we occasionally run free community legal workshops and information sessions on specific topics. Sign up for our newsletter to be informed about these events.',
  },
];

export function ConsultationFaq() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions about our consultation process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {consultationFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
