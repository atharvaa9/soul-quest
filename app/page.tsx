import Link from "next/link"
import { ArrowRight, Brain, Heart, Leaf, Shield, Zap } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import GameDemo from "@/components/game-demo"
import FeatureCard from "@/components/feature-card"
import RoadmapSection from "@/components/roadmap-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">Soul Quest</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link href="#demo" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
                Demo
              </Link>
              <Link
                href="#roadmap"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Roadmap
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Soul Quest: Where Mental Wellness Meets Adventure
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    An innovative RPG where your emotional journey powers gameplay. Transform mental challenges into
                    epic quests and real-world growth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-8">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <Image
                src="/SoulQuest.webp?height=550&width=800"
                width={550}
                height={310}
                alt="Soul Quest Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Core Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Transforming Mental Wellness Into Gameplay
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Soul Quest combines therapeutic techniques with engaging gameplay to create a unique experience that
                  promotes mental wellbeing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Heart className="h-10 w-10 text-primary" />}
                title="Emotion-Powered Combat"
                description="Convert negative thoughts into power-ups and defeat anxiety monsters using breathing techniques."
              />
              <FeatureCard
                icon={<Leaf className="h-10 w-10 text-primary" />}
                title="Social Garden System"
                description="Grow a mental wellness garden where each plant represents different emotional progress."
              />
              <FeatureCard
                icon={<Brain className="h-10 w-10 text-primary" />}
                title="Memory Palace Puzzle"
                description="Build and navigate through your thoughts in an immersive 3D environment."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Therapy Quest Lines"
                description="CBT-based story missions with NPCs representing different emotional states."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Mindful Maze Runner"
                description="Procedurally generated mazes based on daily mood with breathing exercises controlling movement."
              />
              <FeatureCard
                icon={<Heart className="h-10 w-10 text-primary" />}
                title="Emotion Ecosystem"
                description="Build and nurture emotional habitats with creatures representing different emotional states."
              />
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Interactive Demo</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Experience Soul Quest</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a prototype of our emotion-based gameplay system.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <GameDemo />
            </div>
          </div>
        </section>

        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Development Plan</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Soul Quest Development Roadmap
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our step-by-step approach to bringing Soul Quest to life across web and mobile platforms.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <RoadmapSection />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Soul Quest. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

