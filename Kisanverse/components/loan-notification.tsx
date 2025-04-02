"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LoanNotificationProps {
  amount: string
  onClose: () => void
}

export function LoanNotification({ amount, onClose }: LoanNotificationProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-white border border-green-200 rounded-lg shadow-lg p-4 max-w-sm animate-in slide-in-from-right">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium text-green-800">Loan Application Update</h3>
          <p className="text-sm text-gray-600 mt-1">
            Your loan request for ₹{amount} has been sent for processing. We'll notify you once it's approved.
          </p>
          <div className="mt-3 flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-1/3 animate-pulse"></div>
            </div>
            <span className="ml-2 text-xs text-gray-500">Processing</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-full" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  )
}

