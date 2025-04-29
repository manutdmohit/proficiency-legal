'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent') === 'accepted';
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-background border rounded-lg shadow-lg p-4 z-50 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">This website uses cookies</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        We use cookies to analyze website traffic and optimize your website
        experience. By accepting our use of cookies, your data will be
        aggregated with all other user data.
      </p>
      <Button onClick={acceptCookies} className="w-full">
        Accept
      </Button>
    </div>
  );
}
