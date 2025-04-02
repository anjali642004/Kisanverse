"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const languages = [
  { id: "en", name: "English", nativeName: "English" },
  { id: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { id: "te", name: "Telugu", nativeName: "తెలుగు" },
  { id: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { id: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { id: "ml", name: "Malayalam", nativeName: "മലയാളം" },
]

export default function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would store the language preference
    // in a cookie, localStorage, or user settings
    router.push("/")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center text-green-600 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-green-800">Select Your Language</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <RadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage} className="space-y-3">
                  {languages.map((language) => (
                    <div
                      key={language.id}
                      className={`flex items-center space-x-2 border rounded-lg p-3 cursor-pointer transition-colors ${
                        selectedLanguage === language.id ? "border-green-500 bg-green-50" : "border-gray-200"
                      }`}
                      onClick={() => setSelectedLanguage(language.id)}
                    >
                      <RadioGroupItem value={language.id} id={language.id} className="sr-only" />
                      <Label htmlFor={language.id} className="flex-1 cursor-pointer font-medium">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="block">{language.name}</span>
                            <span className="block text-sm text-gray-500">{language.nativeName}</span>
                          </div>
                          {selectedLanguage === language.id && <Check className="h-5 w-5 text-green-600" />}
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <Button type="submit" className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Continue
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

