"use client"

import { Banner } from "@/components/landing/banner"
import { Navigation } from "@/components/landing/navigation"
import { Hero } from "@/components/landing/hero"
import { GetStarted } from "@/components/landing/getStarted"
import { HowItWorks } from "@/components/landing/howItWorks"
import { OpenLetter } from "@/components/landing/OpenLetter"
import { LeadGeneration } from "@/components/landing/LeadGeneration"
import { Stats } from "@/components/landing/Stats"
import { BattleTestedAI } from "@/components/landing/BattleTestedAI"
import { Resources } from "@/components/landing/Resources"
import { CallToAction } from "@/components/landing/CallToAction"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFCBA4] via-[#FFB07C]">
      <Banner />
      <Navigation />
      <Hero />
      <OpenLetter />
      <GetStarted />
      <HowItWorks />
      <LeadGeneration />
      <Stats />
      <BattleTestedAI />
      <Resources />
      <CallToAction />
    </div>
  )
}