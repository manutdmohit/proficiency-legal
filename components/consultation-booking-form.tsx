'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Info } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(8, {
    message: 'Please enter a valid phone number.',
  }),
  practiceArea: z.string({
    required_error: 'Please select a practice area.',
  }),
  specificLawyer: z.string().optional(),
  date: z.date({
    required_error: 'Please select a date.',
  }),
  time: z.string({
    required_error: 'Please select a time.',
  }),
  consultationType: z.enum(['in-person', 'video', 'phone'], {
    required_error: 'Please select a consultation type.',
  }),
  urgency: z.enum(['standard', 'urgent'], {
    required_error: 'Please select urgency level.',
  }),
  briefDescription: z
    .string()
    .min(10, {
      message: 'Please provide at least 10 characters.',
    })
    .max(500, {
      message: 'Description cannot be more than 500 characters.',
    }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({
      message: 'You must agree to the terms and conditions.',
    }),
  }),
});

export function ConsultationBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      briefDescription: '',
      consultationType: 'in-person',
      urgency: 'standard',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast('Consultation request submitted', {
        description: 'We will contact you shortly to confirm your appointment.',
      });
      form.reset();
      setIsSubmitting(false);
      setCharacterCount(0);
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.smith@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="0412 345 678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="practiceArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Practice Area</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a practice area" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="family-law">Family Law</SelectItem>
                    <SelectItem value="property-law">Property Law</SelectItem>
                    <SelectItem value="immigration-law">
                      Immigration Law
                    </SelectItem>
                    <SelectItem value="wills-estates">
                      Wills & Estates
                    </SelectItem>
                    <SelectItem value="business-law">Business Law</SelectItem>
                    <SelectItem value="dispute-resolution">
                      Dispute Resolution
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="specificLawyer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Lawyer (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="No preference - assign the most suitable lawyer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no-preference">
                    No preference - assign the most suitable lawyer
                  </SelectItem>
                  <SelectItem value="jennifer-williams">
                    Jennifer Williams (Family Law)
                  </SelectItem>
                  <SelectItem value="robert-chen">
                    Robert Chen (Property Law)
                  </SelectItem>
                  <SelectItem value="sophia-patel">
                    Sophia Patel (Immigration Law)
                  </SelectItem>
                  <SelectItem value="michael-thompson">
                    Michael Thompson (Business Law)
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Leave blank if you have no preference
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const today = new Date();
                        // Disable dates in the past and weekends
                        return (
                          date < today ||
                          date.getDay() === 0 ||
                          date.getDay() === 6
                        );
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Consultations available Monday-Friday
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Time</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="9:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="consultationType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Consultation Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="in-person" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      In-Person (Sydney Office)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="video" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Video Conference (Zoom/Teams)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="phone" />
                    </FormControl>
                    <FormLabel className="font-normal">Phone Call</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="urgency"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Urgency Level</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="standard" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Standard (1-2 week timeframe)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="urgent" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Urgent (Required within 48-72 hours)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                Urgent consultations may incur an additional priority fee
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="briefDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Description of Your Matter</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please briefly describe your legal matter to help us prepare for your consultation"
                  className="resize-none"
                  rows={4}
                  maxLength={500}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setCharacterCount(e.target.value.length);
                  }}
                />
              </FormControl>
              <div className="flex justify-between">
                <FormDescription>
                  This helps us prepare for your consultation
                </FormDescription>
                <p
                  className={cn(
                    'text-xs',
                    characterCount > 450
                      ? 'text-amber-600'
                      : 'text-muted-foreground'
                  )}
                >
                  {characterCount}/500 characters
                </p>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Card className="bg-muted/50 border-primary/10">
          <CardContent className="flex items-start gap-3 pt-4">
            <Info className="h-5 w-5 text-primary mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">Consultation Fee Information</p>
              <p className="text-muted-foreground mt-1">
                Initial consultations are charged at $250 for a 60-minute
                session. This fee is payable at the time of consultation. If you
                proceed with engaging our services, this consultation fee may be
                credited toward your matter's overall costs.
              </p>
            </div>
          </CardContent>
        </Card>

        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the consultation terms and conditions
                </FormLabel>
                <FormDescription>
                  By checking this box, you acknowledge that you understand the
                  consultation fee structure and that our advice during the
                  consultation is preliminary in nature.
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer md:w-1/2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Request Consultation'}
        </Button>
      </form>
    </Form>
  );
}
