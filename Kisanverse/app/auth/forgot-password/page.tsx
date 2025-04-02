"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <Link href="/auth/login" className="flex items-center text-green-600 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Link>

          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-green-800">Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <>
                  <p className="text-center text-gray-600 mb-6">
                    Enter your email address and we'll send you instructions to reset your password.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Reset Instructions"}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                    <p>Password reset instructions have been sent to:</p>
                    <p className="font-medium">{email}</p>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Please check your email and follow the instructions to reset your password.
                  </p>
                  <Link href="/auth/login" passHref>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Return to Login
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

