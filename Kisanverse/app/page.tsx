import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-green-800 mb-2">Kisanverse</h1>
              <p className="text-gray-600">AI-Powered Farmer Enablement Platform</p>
            </div>

            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Kisanverse Logo"
                    width={120}
                    height={120}
                    className="rounded-full bg-green-100 p-4"
                  />
                </div>

                <div className="space-y-4">
                  <Link href="/auth/login" passHref>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Login
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <Link href="/auth/register" passHref>
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Register
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 text-center">
                  <Link href="/auth/language-select" className="text-sm text-green-600 hover:underline">
                    Change Language
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

