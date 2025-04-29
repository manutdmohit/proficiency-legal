import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const consultants = [
  {
    name: 'Jennifer Williams',
    role: 'Managing Partner',
    specializations: ['Family Law', 'Dispute Resolution'],
    experience: '15+ years',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    email: 'jennifer@proficientlegal.com.au',
    bio: 'Jennifer specializes in complex family law matters, including high-net-worth divorces and challenging custody disputes. She is known for her strategic approach and empathetic client care.',
  },
  {
    name: 'Robert Chen',
    role: 'Senior Partner',
    specializations: ['Property Law', 'Commercial Law'],
    experience: '12+ years',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2f9e946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    email: 'robert@proficientlegal.com.au',
    bio: 'Robert is an expert in property law with extensive experience in commercial and residential real estate transactions, leasing disputes, and development projects across New South Wales.',
  },
  {
    name: 'Sophia Patel',
    role: 'Partner',
    specializations: ['Immigration Law', 'Human Rights'],
    experience: '10+ years',
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    email: 'sophia@proficientlegal.com.au',
    bio: "Sophia has helped hundreds of clients navigate Australia's complex immigration system. She has particular expertise in skilled migration, partner visas, and complex appeals before the Administrative Appeals Tribunal.",
  },
  {
    name: 'Michael Thompson',
    role: 'Associate',
    specializations: ['Business Law', 'Wills & Estates'],
    experience: '8+ years',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    email: 'michael@proficientlegal.com.au',
    bio: 'Michael advises on all aspects of business law from startup formation to mergers and acquisitions. He also specializes in estate planning for business owners and high-net-worth individuals.',
  },
];

export function ConsultantsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {consultants.map((consultant) => (
        <Card key={consultant.name} className="overflow-hidden">
          <div className="grid sm:grid-cols-[120px_1fr] h-full">
            <div className="relative h-32 sm:h-full">
              <Image
                src={consultant.image || '/placeholder.svg'}
                alt={consultant.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="flex flex-col">
                  {consultant.name}
                  <span className="text-sm font-normal text-primary">
                    {consultant.role}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-1 mb-2">
                  {consultant.specializations.map((specialization) => (
                    <Badge key={specialization} variant="secondary">
                      {specialization}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {consultant.bio}
                </p>
                <p className="text-xs mt-2 font-medium">
                  Experience: {consultant.experience}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-1.5 flex-1"
                >
                  <Link href={`mailto:${consultant.email}`}>
                    <Mail className="h-3.5 w-3.5" />
                    <span>Email</span>
                  </Link>
                </Button>
                <Button size="sm" asChild className="gap-1.5 flex-1">
                  <Link href="/book-consultant">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Book</span>
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
