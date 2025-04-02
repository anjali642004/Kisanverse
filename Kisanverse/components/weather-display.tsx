import { Card, CardContent } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, CloudDrizzle, CloudSnow, CloudLightning, CloudFog, Droplets, Wind } from "lucide-react"

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

interface WeatherDisplayProps {
  weatherData: WeatherData
}

export default function WeatherDisplay({ weatherData }: WeatherDisplayProps) {
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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">{getWeatherIcon(weatherData.condition, 64)}</div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{weatherData.temperature}°F</h2>
            <p className="text-gray-500">Feels like {weatherData.feelsLike}°F</p>
            <p className="text-gray-700 capitalize font-medium">{weatherData.condition.replace("-", " ")}</p>
            <p className="text-gray-500">{formatDate(weatherData.date)}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <Droplets className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm text-gray-500">Humidity</span>
            <span className="font-medium">{weatherData.humidity}%</span>
          </div>
          <div className="flex flex-col items-center">
            <Wind className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm text-gray-500">Wind</span>
            <span className="font-medium">{weatherData.windSpeed} mph</span>
          </div>
          <div className="flex flex-col items-center">
            <CloudRain className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-sm text-gray-500">Rain</span>
            <span className="font-medium">{weatherData.precipitation}%</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Today's Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {weatherData.hourlyForecast.map((hour, index) => (
            <Card key={index} className="bg-white/50">
              <CardContent className="p-3 flex flex-col items-center">
                <span className="text-sm font-medium text-gray-500">{hour.time}</span>
                {getWeatherIcon(hour.condition, 24)}
                <span className="text-lg font-semibold mt-1">{hour.temp}°</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Low:</span>
          <span className="font-semibold">{weatherData.low}°</span>
        </div>
        <div className="w-full max-w-[200px] h-2 bg-gradient-to-r from-blue-400 via-amber-300 to-amber-500 rounded-full mx-4"></div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">High:</span>
          <span className="font-semibold">{weatherData.high}°</span>
        </div>
      </div>
    </div>
  )
}

