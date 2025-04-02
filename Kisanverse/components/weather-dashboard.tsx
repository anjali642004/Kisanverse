"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import WeatherDisplay from "./weather-display"
import WeatherCarousel from "./weather-carousel"

// Mock data for the last 7 days
const weatherData = [
  {
    date: new Date(),
    temperature: 72,
    feelsLike: 75,
    condition: "sunny",
    humidity: 45,
    windSpeed: 8,
    precipitation: 0,
    high: 78,
    low: 65,
    hourlyForecast: [
      { time: "6AM", temp: 65, condition: "partly-cloudy" },
      { time: "9AM", temp: 68, condition: "partly-cloudy" },
      { time: "12PM", temp: 72, condition: "sunny" },
      { time: "3PM", temp: 78, condition: "sunny" },
      { time: "6PM", temp: 75, condition: "sunny" },
      { time: "9PM", temp: 70, condition: "clear" },
    ],
  },
  {
    date: new Date(Date.now() - 86400000),
    temperature: 68,
    feelsLike: 70,
    condition: "partly-cloudy",
    humidity: 55,
    windSpeed: 10,
    precipitation: 10,
    high: 73,
    low: 62,
    hourlyForecast: [
      { time: "6AM", temp: 62, condition: "cloudy" },
      { time: "9AM", temp: 65, condition: "partly-cloudy" },
      { time: "12PM", temp: 68, condition: "partly-cloudy" },
      { time: "3PM", temp: 73, condition: "partly-cloudy" },
      { time: "6PM", temp: 70, condition: "partly-cloudy" },
      { time: "9PM", temp: 65, condition: "partly-cloudy" },
    ],
  },
  {
    date: new Date(Date.now() - 2 * 86400000),
    temperature: 65,
    feelsLike: 63,
    condition: "rainy",
    humidity: 80,
    windSpeed: 15,
    precipitation: 70,
    high: 68,
    low: 60,
    hourlyForecast: [
      { time: "6AM", temp: 60, condition: "rainy" },
      { time: "9AM", temp: 62, condition: "rainy" },
      { time: "12PM", temp: 65, condition: "rainy" },
      { time: "3PM", temp: 68, condition: "cloudy" },
      { time: "6PM", temp: 66, condition: "cloudy" },
      { time: "9PM", temp: 63, condition: "cloudy" },
    ],
  },
  {
    date: new Date(Date.now() - 3 * 86400000),
    temperature: 70,
    feelsLike: 72,
    condition: "cloudy",
    humidity: 60,
    windSpeed: 12,
    precipitation: 20,
    high: 75,
    low: 65,
    hourlyForecast: [
      { time: "6AM", temp: 65, condition: "cloudy" },
      { time: "9AM", temp: 68, condition: "cloudy" },
      { time: "12PM", temp: 70, condition: "cloudy" },
      { time: "3PM", temp: 75, condition: "partly-cloudy" },
      { time: "6PM", temp: 72, condition: "partly-cloudy" },
      { time: "9PM", temp: 68, condition: "partly-cloudy" },
    ],
  },
  {
    date: new Date(Date.now() - 4 * 86400000),
    temperature: 75,
    feelsLike: 78,
    condition: "sunny",
    humidity: 40,
    windSpeed: 5,
    precipitation: 0,
    high: 80,
    low: 68,
    hourlyForecast: [
      { time: "6AM", temp: 68, condition: "clear" },
      { time: "9AM", temp: 72, condition: "sunny" },
      { time: "12PM", temp: 75, condition: "sunny" },
      { time: "3PM", temp: 80, condition: "sunny" },
      { time: "6PM", temp: 78, condition: "sunny" },
      { time: "9PM", temp: 72, condition: "clear" },
    ],
  },
  {
    date: new Date(Date.now() - 5 * 86400000),
    temperature: 73,
    feelsLike: 75,
    condition: "partly-cloudy",
    humidity: 50,
    windSpeed: 8,
    precipitation: 10,
    high: 78,
    low: 67,
    hourlyForecast: [
      { time: "6AM", temp: 67, condition: "partly-cloudy" },
      { time: "9AM", temp: 70, condition: "partly-cloudy" },
      { time: "12PM", temp: 73, condition: "partly-cloudy" },
      { time: "3PM", temp: 78, condition: "partly-cloudy" },
      { time: "6PM", temp: 75, condition: "partly-cloudy" },
      { time: "9PM", temp: 70, condition: "clear" },
    ],
  },
  {
    date: new Date(Date.now() - 6 * 86400000),
    temperature: 67,
    feelsLike: 65,
    condition: "cloudy",
    humidity: 65,
    windSpeed: 12,
    precipitation: 30,
    high: 70,
    low: 62,
    hourlyForecast: [
      { time: "6AM", temp: 62, condition: "cloudy" },
      { time: "9AM", temp: 64, condition: "cloudy" },
      { time: "12PM", temp: 67, condition: "cloudy" },
      { time: "3PM", temp: 70, condition: "cloudy" },
      { time: "6PM", temp: 68, condition: "cloudy" },
      { time: "9PM", temp: 65, condition: "cloudy" },
    ],
  },
]

export default function WeatherDashboard() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)

  const handlePrevDay = () => {
    setSelectedDayIndex((prev) => (prev === weatherData.length - 1 ? 0 : prev + 1))
  }

  const handleNextDay = () => {
    setSelectedDayIndex((prev) => (prev === 0 ? weatherData.length - 1 : prev - 1))
  }

  const handleDaySelect = (index: number) => {
    setSelectedDayIndex(index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Weather Forecast</h1>
            <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
          </div>

          <WeatherDisplay weatherData={weatherData[selectedDayIndex]} />

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Last 7 Days</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrevDay} className="h-8 w-8">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNextDay} className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <WeatherCarousel
              weatherData={weatherData}
              selectedDayIndex={selectedDayIndex}
              onDaySelect={handleDaySelect}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

