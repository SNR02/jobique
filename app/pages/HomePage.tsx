'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Search, Copy, ExternalLink, Zap, Target, TrendingUp } from "lucide-react"
import { useToast } from '../hooks/use-toast'

import Hero from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'

import { indianCitiesGeoIds } from '../utils/indianCitiesAndStates'
import timeFrameMap from '../utils/timeFrames'
import TimeParamsInfo from '../components/home/TimeParamsInfo'



export function HomePage() {
  const [pastedUrl, setPastedUrl] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')
  const { toast } = useToast()


  const generateJobUrl = () => {
    if (!jobTitle || !selectedLocation || !selectedTimeFrame) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate the URL.",
        variant: "destructive",
      })
      return
    }

    const geoId = indianCitiesGeoIds[selectedLocation as keyof typeof indianCitiesGeoIds]
    const tprValue = timeFrameMap[selectedTimeFrame as keyof typeof timeFrameMap]
    
    const url = `https://www.linkedin.com/jobs/search/?f_TPR=${tprValue}&geoId=${geoId}&keywords=${encodeURIComponent(jobTitle)}`
    setGeneratedUrl(url)
    
    toast({
      title: "URL Generated!",
      description: "Your optimized LinkedIn job search URL is ready.",
    })
  }

  const modifyExistingUrl = () => {
    if (!pastedUrl || !selectedTimeFrame) {
      toast({
        title: "Missing Information",
        description: "Please paste a URL and select a time frame.",
        variant: "destructive",
      })
      return
    }

    try {
      const url = new URL(pastedUrl)
      const tprValue = timeFrameMap[selectedTimeFrame as keyof typeof timeFrameMap]
      url.searchParams.set('f_TPR', tprValue)
      setGeneratedUrl(url.toString())
      
      toast({
        title: "URL Modified!",
        description: "Your URL has been optimized with the new time filter.",
      })
    } catch (error) {
      console.error("Invalid URL:", error);
      toast({
        title: "Invalid URL",
        description: "Please enter a valid LinkedIn job search URL.",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl)
    toast({
      title: "Copied!",
      description: "URL copied to clipboard.",
    })
  }

  const openInNewTab = () => {
    window.open(generatedUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <Hero />

        {/* Main Tool */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="bg-gray-900/50 backdrop-blur-xl border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <CardHeader className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-t-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <CardTitle className="text-3xl flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Search className="w-8 h-8" />
                  </div>
                  Jobique URL Generator
                </CardTitle>
                <CardDescription className="text-cyan-100 text-lg">
                  Create or modify LinkedIn job search URLs with precision time filters using Jobique
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-8 bg-gray-900/80 backdrop-blur-xl">
              <Tabs defaultValue="create" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800/50 border border-gray-700/50">
                  <TabsTrigger 
                    value="create" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white text-gray-300"
                  >
                    Create New Search
                  </TabsTrigger>
                  <TabsTrigger 
                    value="modify"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white text-gray-300"
                  >
                    Modify Existing URL
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="create" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="jobTitle" className="text-gray-200 text-lg font-medium">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="e.g., Product Manager, Software Engineer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="h-14 bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="location" className="text-gray-200 text-lg font-medium">Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="h-14 bg-gray-800/50 border-gray-600/50 text-white focus:border-purple-500 text-lg">
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                          {Object.keys(indianCitiesGeoIds).map((location) => (
                            <SelectItem key={location} value={location} className="text-white hover:bg-gray-700">
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="timeFrame" className="text-gray-200 text-lg font-medium">Time Frame</Label>
                    <Select value={selectedTimeFrame} onValueChange={setSelectedTimeFrame}>
                      <SelectTrigger className="h-14 bg-gray-800/50 border-gray-600/50 text-white focus:border-purple-500 text-lg">
                        <SelectValue placeholder="Select time frame" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600 text-white">
                        {Object.keys(timeFrameMap).map((timeFrame) => (
                          <SelectItem key={timeFrame} value={timeFrame} className="text-white hover:bg-gray-700">
                            Last {timeFrame}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={generateJobUrl} 
                    className="w-full h-16 text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    <Zap className="w-6 h-6 mr-3" />
                    Generate Optimized URL
                  </Button>
                </TabsContent>
                
                <TabsContent value="modify" className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="pastedUrl" className="text-gray-200 text-lg font-medium">LinkedIn Job Search URL</Label>
                    <Input
                      id="pastedUrl"
                      placeholder="Paste your LinkedIn job search URL here..."
                      value={pastedUrl}
                      onChange={(e) => setPastedUrl(e.target.value)}
                      className="h-14 bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/20 text-lg"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="timeFrameModify" className="text-gray-200 text-lg font-medium">New Time Frame</Label>
                    <Select value={selectedTimeFrame} onValueChange={setSelectedTimeFrame}>
                      <SelectTrigger className="h-14 bg-gray-800/50 border-gray-600/50 text-white focus:border-green-500 text-lg">
                        <SelectValue placeholder="Select time frame" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600 text-white">
                        {Object.keys(timeFrameMap).map((timeFrame) => (
                          <SelectItem key={timeFrame} value={timeFrame} className="text-white hover:bg-gray-700">
                            Last {timeFrame}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={modifyExistingUrl} 
                    className="w-full h-16 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25"
                  >
                    <Target className="w-6 h-6 mr-3" />
                    Modify URL with Time Filter
                  </Button>
                </TabsContent>
              </Tabs>
              
              {/* Generated URL Display */}
              {generatedUrl && (
                <div className="mt-10 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/50 backdrop-blur-sm">
                  <Label className="text-lg font-bold text-cyan-400 mb-4 block items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Your Optimized LinkedIn URL:
                  </Label>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 p-4 bg-black/50 border border-gray-600/30 rounded-lg font-mono text-sm text-gray-300 break-all backdrop-blur-sm">
                      {generatedUrl}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        onClick={copyToClipboard} 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                      <Button 
                        onClick={openInNewTab} 
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <HowItWorks />

        {/* Time Parameters Info */}
        <TimeParamsInfo />
      </div>
    </div>
  )
}
