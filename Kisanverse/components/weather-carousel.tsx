"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, CloudDrizzle, CloudSnow, CloudLightning, CloudFog } from "lucide-react"

interface HourlyForecast {
  time: string
  temp: number
  condition: string
}

interface WeatherData {
  date: Date
  temperature: number
  feelsLike: number
  condition: string
  humidity: number
  windSpeed: number
  precipitation: number
  high: number
  low: number
  hourlyForecast: HourlyForecast[]
}

interface WeatherCarouselProps {
  weatherData: WeatherData[]
  selectedDayIndex: number
  onDaySelect: (index: number) => void
}

export default function WeatherCarousel({ weatherData, selectedDayIndex, onDaySelect }: WeatherCarouselProps) {
  const getWeatherIcon = (condition: string, size = 24) => {
    switch (condition) {
      case "sunny":
        return <Sun size={size} className="text-amber-500" />
      case "partly-cloudy":
        return <Cloud size={size} className="text-gray-400" />
      case "cloudy":
        return <Cloud size={size} className="text-gray-500" />
      case "rainy":
        return <CloudRain size={size} className="text-blue-500" />
      case "drizzle":
        return <CloudDrizzle size={size} className="text-blue-400" />
      case "snowy":
        return <CloudSnow size={size} className="text-blue-200" />
      case "stormy":
        return <CloudLightning size={size} className="text-purple-500" />
      case "foggy":
        return <CloudFog size={size} className="text-gray-300" />
      case "clear":
        return <Sun size={size} className="text-amber-500" />
      default:
        return <Sun size={size} className="text-amber-500" />
    }
  }

  const formatDay = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const dayDate = new Date(date)
    dayDate.setHours(0, 0, 0, 0)

    const diffTime = today.getTime() - dayDate.getTime()
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    if (diffDays > 1 && diffDays < 7) return `${diffDays} days ago`

    return date.toLocaleDateString("en-US", { weekday: "short" })
  }

  return (
    <div className="grid grid-cols-7 gap-2">
      {weatherData.map((day, index) => (
        <Card
          key={index}
          className={`cursor-pointer transition-all ${
            selectedDayIndex === index ? "bg-sky-100 border-sky-300" : "bg-white/50 hover:bg-sky-50"
          }`}
          onClick={() => onDaySelect(index)}
        >
          <CardContent className="p-3 flex flex-col items-center">
            <span className="text-xs font-medium text-gray-500 mb-1">{formatDay(day.date)}</span>
            {getWeatherIcon(day.condition, 28)}
            <div className="mt-2 flex justify-between w-full text-xs">
              <span className="text-gray-500">{day.low}°</span>
              <span className="font-medium">{day.high}°</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

