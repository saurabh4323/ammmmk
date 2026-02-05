"use client";

import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import IntelBriefing from "@/components/landing/IntelBriefing";
import Schedule from "@/components/landing/Schedule";
import HostProfile from "@/components/landing/HostProfile";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToRegistration = () => {
    const section = document.getElementById('registration');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <Hero onRegister={scrollToRegistration} />

      <IntelBriefing />
      <Schedule />
      <HostProfile />
      <CTASection id="registration" />
      <Footer />
    </main>
  );
}
