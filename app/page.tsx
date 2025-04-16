import React from 'react';
import IntroSection from '@/components/home/intro-section';
import OverviewSection from '@/components/home/overview-section';
import NavigationCards from '@/components/home/navigation-cards';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <IntroSection />
      <OverviewSection />
      <NavigationCards />
    </main>
  );
}
