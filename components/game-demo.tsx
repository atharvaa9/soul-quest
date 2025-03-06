"use client"

import { useState, useEffect } from "react"
import { Heart, Shield, Zap } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function GameDemo() {
  const [mood, setMood] = useState(50)
  const [energy, setEnergy] = useState(40)
  const [focus, setFocus] = useState(60)
  const [breathCount, setBreathCount] = useState(0)
  const [isBreathing, setIsBreathing] = useState(false)
  const [breathPhase, setBreathPhase] = useState("inhale")
  const [monster, setMonster] = useState({
    name: "Anxiety Specter",
    health: 100,
    maxHealth: 100,
    image: "/placeholder.svg?height=200&width=200",
  })

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isBreathing) {
      timer = setInterval(() => {
        if (breathPhase === "inhale") {
          setBreathPhase("hold")
          setTimeout(() => {
            setBreathPhase("exhale")
            setTimeout(() => {
              setBreathPhase("inhale")
              setBreathCount((prev) => prev + 1)

              // Update stats
              setMood((prev) => Math.min(prev + 2, 100))
              setEnergy((prev) => Math.min(prev + 1, 100))
              setFocus((prev) => Math.min(prev + 3, 100))

              // Damage monster
              setMonster((prev) => ({
                ...prev,
                health: Math.max(prev.health - 5, 0),
              }))
            }, 4000)
          }, 2000)
        }
      }, 6000)
    }

    return () => clearInterval(timer)
  }, [isBreathing, breathPhase])

  const startBreathing = () => {
    setIsBreathing(true)
    setBreathPhase("inhale")
  }

  const stopBreathing = () => {
    setIsBreathing(false)
  }

  const resetDemo = () => {
    setMood(50)
    setEnergy(40)
    setFocus(60)
    setBreathCount(0)
    setIsBreathing(false)
    setBreathPhase("inhale")
    setMonster({
      name: "Anxiety Specter",
      health: 100,
      maxHealth: 100,
      image: "/placeholder.svg?height=200&width=200",
    })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Player Status</CardTitle>
          <CardDescription>Your emotional state affects your abilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Mood</span>
              </div>
              <span>{mood}%</span>
            </div>
            <Progress value={mood} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span>Energy</span>
              </div>
              <span>{energy}%</span>
            </div>
            <Progress value={energy} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>Focus</span>
              </div>
              <span>{focus}%</span>
            </div>
            <Progress value={focus} className="h-2" />
          </div>

          <div className="mt-6 rounded-lg bg-muted p-4">
            <h4 className="mb-2 font-medium">Breathing Exercise</h4>
            <div className="mb-4 text-center">
              <div
                className={`mx-auto h-24 w-24 rounded-full transition-all duration-1000 ${
                  breathPhase === "inhale"
                    ? "bg-blue-200 scale-100"
                    : breathPhase === "hold"
                      ? "bg-blue-400 scale-110"
                      : "bg-blue-600 scale-90"
                }`}
              ></div>
              <p className="mt-2 text-sm font-medium">{breathPhase.toUpperCase()}</p>
            </div>
            <div className="flex justify-center gap-4">
              {!isBreathing ? (
                <Button onClick={startBreathing}>Start Breathing</Button>
              ) : (
                <Button variant="outline" onClick={stopBreathing}>
                  Stop
                </Button>
              )}
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Completed breaths: {breathCount}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Combat Encounter</CardTitle>
          <CardDescription>Use breathing techniques to defeat the monster</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold">{monster.name}</h3>
            <div className="my-4 flex justify-center">
              <Image
                src="/AnxietyMonster.webp"
                alt={monster.name}
                width={280}
                height={280}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Health</span>
                <span>
                  {monster.health}/{monster.maxHealth}
                </span>
              </div>
              <Progress value={(monster.health / monster.maxHealth) * 100} className="h-2" />
            </div>

            {monster.health <= 0 && (
              <div className="mt-6 rounded-lg bg-green-100 p-4 dark:bg-green-900/30">
                <p className="font-medium text-green-800 dark:text-green-300">
                  Victory! You&apos;ve defeated the {monster.name}!
                </p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={resetDemo} variant="outline" className="w-full">
            Reset Demo
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

