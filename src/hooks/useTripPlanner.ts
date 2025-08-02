import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

// Types matching the Supabase edge function
interface TripPlannerRequest {
  location: string
  type: string
  lang?: string // Optional language parameter, defaults to 'th'
}

interface TimelineEntry {
  day: number
  time: string
  location: string
  description: string
}

interface TripItineraryResponse {
  overview: string
  accommodations: string
  dining: string
  transportation: string
  bestTimeToVisit: string
  budgetEstimation: string
  culturalTips: string
  packingList: string
  safetyTips: string
  timeline: TimelineEntry[]
}

interface TripPlannerResponse {
  success: boolean
  data?: {
    result: string
    timeline?: TimelineEntry[]
    structuredData?: TripItineraryResponse
    location?: string
    type?: string
    lang?: string
    prompt_generated?: string
  }
  error?: string
  message?: string
}

// Hook options interface
interface UseTripPlannerOptions {
  location: string
  type: string
  lang?: string
  onSuccess?: (data: TripPlannerResponse) => void
  onError?: (error: Error) => void
}

// API call function
const fetchTripPlan = async (params: TripPlannerRequest): Promise<TripPlannerResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN
  
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL environment variable is required')
  }
  
  const url = baseUrl.endsWith('/') ? `${baseUrl}trip-planer` : `${baseUrl}/trip-planer`
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch trip plan: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  
  if (!data.success) {
    throw new Error(data.error || data.message || 'Unknown error occurred')
  }

  return data
}

// Custom hook using TanStack Query
export const useTripPlanner = () => {
  const [data,setData] = useState<TripPlannerResponse | null>(null)
  const  mutate = useMutation({
    mutationFn: (params: TripPlannerRequest) => fetchTripPlan(params),
    onSuccess: (data) => {
      setData(data)
    },
    onError: (error) => {
      setData(null)
    },
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors (client errors)
      if (error instanceof Error && error.message.includes('4')) {
        return false
      }
      // Retry up to 2 times for other errors
      return failureCount < 2
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })

  return {
    data,
    mutate,
  }
}

// Export types for consumers
export type {
  TripPlannerRequest,
  TripPlannerResponse,
  TripItineraryResponse,
  TimelineEntry,
  UseTripPlannerOptions,
}