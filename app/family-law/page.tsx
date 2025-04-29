import { PageHeader } from '@/components/page-header';
import { ServiceDetails } from '@/components/service-details';
import { Faq } from '@/components/faq';
import { CtaSection } from '@/components/cta-section';

const familyLawFaqs = [
  {
    question: 'What is the divorce process in Australia?',
    answer:
      'In Australia, you must be separated for at least 12 months before applying for divorce. The process involves filing an application with the Federal Circuit and Family Court of Australia, serving documents on your spouse, and attending a hearing if necessary.',
  },
  {
    question: 'How is child custody determined?',
    answer:
      "Child custody (now called parenting arrangements) is determined based on the best interests of the child. The court considers factors such as the child's relationship with each parent, the ability of parents to provide for the child's needs, and any history of family violence.",
  },
  {
    question: 'How are assets divided in a divorce?',
    answer:
      'Asset division follows a four-step process: identifying and valuing all assets and liabilities, assessing contributions (financial and non-financial), considering future needs, and ensuring the outcome is just and equitable.',
  },
  {
    question: 'Can I get spousal maintenance after separation?',
    answer:
      "Spousal maintenance may be available if you cannot support yourself adequately and your former partner has the capacity to pay. It's typically temporary and depends on factors like your age, health, income, and ability to work.",
  },
  {
    question: 'Do we need to go to court for our family law matter?',
    answer:
      'Not necessarily. Many family law matters can be resolved through alternative dispute resolution methods like mediation, collaborative practice, or negotiation. Court proceedings are typically a last resort.',
  },
];

export default function FamilyLaw() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Family Law"
        description="Expert legal guidance for all family matters"
      />

      <ServiceDetails
        title="Family Law Services"
        description="Our experienced family lawyers provide compassionate and practical advice on all aspects of family law."
        image="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
        services={[
          {
            title: 'Divorce & Separation',
            description:
              'Expert guidance through the divorce process, including property settlements and spousal maintenance.',
          },
          {
            title: 'Child Custody & Support',
            description:
              "Assistance with parenting arrangements, child support, and parenting plans that prioritize your children's wellbeing.",
          },
          {
            title: 'Property Settlements',
            description:
              'Fair division of assets and liabilities following relationship breakdown.',
          },
          {
            title: 'Domestic Violence Protection',
            description:
              'Support and legal protection for victims of domestic violence.',
          },
          {
            title: 'Prenuptial Agreements',
            description:
              'Drafting and reviewing binding financial agreements before or during a relationship.',
          },
          {
            title: 'Mediation Services',
            description:
              'Alternative dispute resolution to help families reach amicable solutions outside of court.',
          },
        ]}
      />

      <Faq
        title="Family Law FAQs"
        description="Common questions about family law matters"
        faqs={familyLawFaqs}
      />

      <CtaSection />
    </div>
  );
}
