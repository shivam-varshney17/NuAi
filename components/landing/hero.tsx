import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Image component

export function Hero() {
  return (
    <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-6">
            AI-first Customer Service
          </div>
          <h1 className="text-[64px] leading-[1.1] font-serif mb-6 text-[#1C1C1C]">
            The #1 AI Sales Agent for your website
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            Build a custom agent for your website. Finally, a custom agent for lead generation, bla bla bla.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button 
              size="lg" 
              asChild
              className="bg-[#1C1C1C] text-white hover:bg-black px-8"
            >
              <Link href="/dashboard">View demo</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="bg-white/50 backdrop-blur-sm px-8 hover:bg-white/70"
            >
              <Link href="/start-free">Start free trial</Link>
            </Button>
            <Button 
              size="lg" 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              <Link href="/auth/signup">Sign up</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block"> {/* Hide on small screens */}
          <Image 
            src="/images/dashboard.png" // Directly reference the image path
            alt="Dashboard"
            className="w-full h-auto rounded-lg" // Add styling as needed
            width={500} // Set width as needed
            height={300} // Set height as needed
          />
        </div>
      </div>
    </section>
  )
}