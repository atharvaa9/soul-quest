import { Check, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RoadmapSection() {
  return (
    <Tabs defaultValue="planning">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="planning">Planning</TabsTrigger>
        <TabsTrigger value="prototype">Prototype</TabsTrigger>
        <TabsTrigger value="mvp">MVP</TabsTrigger>
        <TabsTrigger value="expansion">Expansion</TabsTrigger>
      </TabsList>

      <TabsContent value="planning" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Phase 1: Planning & Research</CardTitle>
            <CardDescription>3-4 months</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-green-500" />
                <div>
                  <h4 className="font-medium">Market Research & Concept Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Research existing mental health apps and games, identify target audience, and validate core concept.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-green-500" />
                <div>
                  <h4 className="font-medium">Technical Stack Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose appropriate technologies for web and mobile development (React, React Native, Unity, etc.).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Game Design Document</h4>
                  <p className="text-sm text-muted-foreground">
                    Create detailed documentation for game mechanics, systems, and therapeutic elements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Consult Mental Health Professionals</h4>
                  <p className="text-sm text-muted-foreground">
                    Partner with therapists and psychologists to ensure therapeutic elements are effective and ethical.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="prototype" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Phase 2: Prototype Development</CardTitle>
            <CardDescription>4-6 months</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Core Gameplay Prototype</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop a playable prototype focusing on the emotion-powered combat system and breathing mechanics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Web App Foundation</h4>
                  <p className="text-sm text-muted-foreground">
                    Build the basic web application structure using Next.js with user authentication and profiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Mobile App Skeleton</h4>
                  <p className="text-sm text-muted-foreground">
                    Create the foundation for the mobile application using React Native or Unity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">User Testing & Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Conduct initial user testing sessions to gather feedback on core mechanics and user experience.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="mvp" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Phase 3: Minimum Viable Product</CardTitle>
            <CardDescription>6-8 months</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Complete Core Game Loop</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement the full gameplay cycle including emotion tracking, combat, and progression systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Social Garden Implementation</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop the social garden system with basic multiplayer functionality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Cross-Platform Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure seamless data synchronization between web and mobile platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Beta Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Launch a closed beta to gather extensive user feedback and make necessary adjustments.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="expansion" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Phase 4: Expansion & Refinement</CardTitle>
            <CardDescription>Ongoing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Full Launch</h4>
                  <p className="text-sm text-muted-foreground">
                    Official release of Soul Quest on web and mobile platforms with marketing campaign.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Additional Game Modes</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement Mindful Maze Runner, Emotion Ecosystem, and other planned game modes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Community Building</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop community features, events, and challenges to foster user engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Data Analysis & Improvement</h4>
                  <p className="text-sm text-muted-foreground">
                    Analyze user data to improve therapeutic effectiveness and engagement.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}