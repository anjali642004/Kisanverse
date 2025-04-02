"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, BarChart3, CloudSun, ShoppingCart, Users, LogOut, CloudRain, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { LoanNotification } from "@/components/loan-notification"

export default function Dashboard() {
  const router = useRouter()
  const [isLoanDialogOpen, setIsLoanDialogOpen] = useState(false)
  const [loanAmount, setLoanAmount] = useState("")
  const [loanPurpose, setLoanPurpose] = useState("crop")
  const [loanTerm, setLoanTerm] = useState("6")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loanSuccess, setLoanSuccess] = useState(false)
  const [showLoanNotification, setShowLoanNotification] = useState(false)
  const [appliedLoanAmount, setAppliedLoanAmount] = useState("")

  const handleLogout = () => {
    // In a real app, you would clear auth tokens/cookies here
    router.push("/")
  }

  const handleLoanSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setLoanSuccess(true)
      setAppliedLoanAmount(loanAmount)

      // Reset form after 3 seconds and close dialog
      setTimeout(() => {
        setLoanSuccess(false)
        setIsLoanDialogOpen(false)
        setShowLoanNotification(true)
        setLoanAmount("")
        setLoanPurpose("crop")
        setLoanTerm("6")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">Kisanverse</h1>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-600">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Welcome, Farmer!</h2>
          <p className="text-gray-600">Here's your farming dashboard</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border border-green-100 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-100">
              Overview
            </TabsTrigger>
            <TabsTrigger value="credit" className="data-[state=active]:bg-green-100">
              Credit
            </TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-green-100">
              Market
            </TabsTrigger>
            <TabsTrigger value="weather" className="data-[state=active]:bg-green-100">
              Weather
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Credit Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-2xl font-bold">720</span>
                    <span className="ml-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Good</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Crop Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-2xl font-bold">85%</span>
                    <span className="ml-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Healthy</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Weather Alert</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <CloudSun className="h-5 w-5 text-amber-500 mr-2" />
                    <span className="text-sm">Light rain expected tomorrow</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Market Prices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <ShoppingCart className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">Rice: ₹2,450/quintal</span>
                    <span className="ml-2 text-xs text-green-600">↑ 5%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your recent farming activities and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <CreditCard className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Loan Application Submitted</h3>
                      <p className="text-sm text-gray-500">Your loan application is being processed</p>
                      <p className="text-xs text-gray-400 mt-1">Just now</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Loan Application Approved</h3>
                      <p className="text-sm text-gray-500">Your loan application for ₹50,000 has been approved</p>
                      <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <CloudSun className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Weather Advisory</h3>
                      <p className="text-sm text-gray-500">Delay irrigation due to expected rainfall in your area</p>
                      <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">FPO Meeting Reminder</h3>
                      <p className="text-sm text-gray-500">Upcoming meeting with your Farmer Producer Organization</p>
                      <p className="text-xs text-gray-400 mt-1">5 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="credit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Credit Score & Loan Eligibility</CardTitle>
                <CardDescription>AI-powered credit assessment based on your farming history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-4">
                      <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-3xl font-bold text-green-600">720</span>
                      </div>
                      <svg className="absolute top-0 left-0" width="128" height="128" viewBox="0 0 128 128">
                        <circle cx="64" cy="64" r="60" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <circle
                          cx="64"
                          cy="64"
                          r="60"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="8"
                          strokeDasharray="377"
                          strokeDashoffset="94"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-center text-gray-600">
                      Your credit score is <strong>Good</strong>
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-800 mb-2">Loan Eligibility</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Based on your farming history and credit score, you are eligible for:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Crop Loan</span>
                        <span className="font-medium">Up to ₹1,00,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Equipment Loan</span>
                        <span className="font-medium">Up to ₹2,50,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Interest Rate</span>
                        <span className="font-medium">7% - 9%</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setIsLoanDialogOpen(true)}>
                    Apply for Loan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Market Prices & Opportunities</CardTitle>
                <CardDescription>Real-time market prices and direct buyer connections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-medium text-gray-500">Crop</th>
                          <th className="text-right py-2 font-medium text-gray-500">Current Price</th>
                          <th className="text-right py-2 font-medium text-gray-500">Change</th>
                          <th className="text-right py-2 font-medium text-gray-500">Forecast</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3">Rice</td>
                          <td className="text-right">₹2,450/quintal</td>
                          <td className="text-right text-green-600">↑ 5%</td>
                          <td className="text-right text-amber-600">Hold</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3">Wheat</td>
                          <td className="text-right">₹2,100/quintal</td>
                          <td className="text-right text-red-600">↓ 2%</td>
                          <td className="text-right text-green-600">Buy</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3">Cotton</td>
                          <td className="text-right">₹6,800/quintal</td>
                          <td className="text-right text-green-600">↑ 8%</td>
                          <td className="text-right text-green-600">Sell</td>
                        </tr>
                        <tr>
                          <td className="py-3">Sugarcane</td>
                          <td className="text-right">₹3,200/quintal</td>
                          <td className="text-right text-gray-500">-</td>
                          <td className="text-right text-amber-600">Hold</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Direct Buyer Opportunities</h3>
                    <p className="text-sm text-gray-600 mb-4">These buyers are looking for your crops:</p>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <div className="flex justify-between">
                          <h4 className="font-medium">ABC Food Processing</h4>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Premium Buyer
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Looking for 20 quintals of rice at ₹2,500/quintal</p>
                        <Button variant="outline" size="sm" className="mt-2 text-blue-600 border-blue-200">
                          Contact Buyer
                        </Button>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <div className="flex justify-between">
                          <h4 className="font-medium">XYZ Exports</h4>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Verified</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Looking for 50 quintals of cotton at ₹7,000/quintal
                        </p>
                        <Button variant="outline" size="sm" className="mt-2 text-blue-600 border-blue-200">
                          Contact Buyer
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weather" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Weather & Pest Predictions</CardTitle>
                <CardDescription>AI-powered hyperlocal weather and pest forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-sky-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sky-800 mb-2">7-Day Weather Forecast</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <CloudSun className="h-5 w-5 text-amber-500 mr-2" />
                            <span>Today</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium">32°C</span>
                            <span className="text-gray-500 text-sm ml-2">24°C</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <CloudRain className="h-5 w-5 text-blue-500 mr-2" />
                            <span>Tomorrow</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium">28°C</span>
                            <span className="text-gray-500 text-sm ml-2">22°C</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <CloudRain className="h-5 w-5 text-blue-500 mr-2" />
                            <span>Wednesday</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium">27°C</span>
                            <span className="text-gray-500 text-sm ml-2">21°C</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 bg-red-50 p-4 rounded-lg">
                      <h3 className="font-medium text-red-800 mb-2">Pest & Disease Alert</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border border-red-100">
                          <h4 className="font-medium text-red-600">High Risk: Rice Blast</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Current weather conditions are favorable for rice blast development
                          </p>
                          <Button variant="outline" size="sm" className="mt-2 text-red-600 border-red-200">
                            View Prevention Tips
                          </Button>
                        </div>
                        <div className="bg-white p-3 rounded border border-amber-100">
                          <h4 className="font-medium text-amber-600">Medium Risk: Aphids</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Monitor your crops for aphid infestation in the next 5-7 days
                          </p>
                          <Button variant="outline" size="sm" className="mt-2 text-amber-600 border-amber-200">
                            View Prevention Tips
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-800 mb-2">Farming Advisory</h3>
                    <p className="text-sm text-gray-600 mb-2">Based on weather and soil conditions:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2 mt-0.5">✓</span>
                        <span>Delay irrigation due to expected rainfall in the next 48 hours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2 mt-0.5">✓</span>
                        <span>Apply fungicide preventatively to protect against rice blast</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-200 text-green-800 rounded-full p-1 mr-2 mt-0.5">✓</span>
                        <span>Optimal time for nitrogen application in the next 3-5 days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      {/* Loan Application Dialog */}
      <Dialog open={isLoanDialogOpen} onOpenChange={setIsLoanDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Loan Application</DialogTitle>
            <DialogDescription>Apply for a loan based on your credit eligibility.</DialogDescription>
          </DialogHeader>

          {loanSuccess ? (
            <div className="py-6">
              <Alert className="bg-green-50 border-green-200">
                <Check className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Application Successful</AlertTitle>
                <AlertDescription className="text-green-700">
                  Your loan request for ₹{loanAmount} has been sent. We'll notify you once it's approved.
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <form onSubmit={handleLoanSubmit}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                  <Input
                    id="loan-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    required
                    min="5000"
                    max="250000"
                  />
                  <p className="text-xs text-gray-500">Min: ₹5,000 | Max: ₹2,50,000</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loan-purpose">Loan Purpose</Label>
                  <Select value={loanPurpose} onValueChange={setLoanPurpose}>
                    <SelectTrigger id="loan-purpose">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crop">Crop Loan</SelectItem>
                      <SelectItem value="equipment">Farm Equipment</SelectItem>
                      <SelectItem value="irrigation">Irrigation System</SelectItem>
                      <SelectItem value="storage">Storage Facility</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loan-term">Loan Term (months)</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger id="loan-term">
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 months</SelectItem>
                      <SelectItem value="6">6 months</SelectItem>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsLoanDialogOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Apply Now"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
      {/* Loan Notification */}
      {showLoanNotification && (
        <LoanNotification amount={appliedLoanAmount} onClose={() => setShowLoanNotification(false)} />
      )}
    </div>
  )
}

