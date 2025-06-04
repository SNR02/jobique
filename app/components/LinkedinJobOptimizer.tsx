'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Search, Clock, Copy, ExternalLink, Zap, Target, TrendingUp } from "lucide-react"
import { useToast } from '../hooks/use-toast'

export function LinkedinJobOptimizer() {
  const [pastedUrl, setPastedUrl] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')
  const { toast } = useToast()

  // GeoID mapping for major locations
  const locationMap = {
    'India': '102713980',
    'United States': '103644278',
    'United Kingdom': '101165590',
    'Canada': '101174742',
    'Australia': '101452733',
    'Germany': '101282230',
    'France': '105015875',
    'Singapore': '102454443',
    'UAE': '104305776',
    'Netherlands': '102890719'
  }

  // Time frame mapping
  const timeFrameMap = {
    '1 hour': 'r3600',
    '3 hours': 'r10800',
    '4 hours': 'r14400',
    '6 hours': 'r21600',
    '12 hours': 'r43200',
    '24 hours': 'r86400'
  }

  const generateJobUrl = () => {
    if (!jobTitle || !selectedLocation || !selectedTimeFrame) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate the URL.",
        variant: "destructive",
      })
      return
    }

    const geoId = locationMap[selectedLocation as keyof typeof locationMap]
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-yellow-400" />
            Lightning Fast Job Discovery
          </div>
          
          <h1 className="font-black mb-8 animate-fade-in">
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Jobique
            </span>
            <br />
            <br />
            <span className="text-4xl md:text-6xl text-white">Linkedin Job Optimizer</span>
          </h1>

          <br />
          <br />
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in">
            Discover jobs posted in the last <span className="text-cyan-400 font-bold">1-6 hours</span> using LinkedIn's hidden time filters. 
            Apply early, get noticed first, and <span className="text-purple-400 font-bold">land your dream job faster</span>.
          </p>

          <br />
          
          {/* Enhanced Stats */}
          <div className="flex flex-wrap justify-center gap-10 mb-16">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">3x</div>
              <div className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Higher Response Rate</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">1-6hrs</div>
              <div className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">Fresh Postings</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">Always Available</div>
            </div>
          </div>
        </div>

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
                          {Object.keys(locationMap).map((location) => (
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
                  <Label className="text-lg font-bold text-cyan-400 mb-4 block flex items-center gap-2">
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
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-5xl font-black text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16">
            How Jobique Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-500">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">1. Enter Job Details</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Specify your job title, location, and desired time frame for the freshest postings.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-500">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">2. Generate URL</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our tool creates a LinkedIn URL with hidden time parameters for precision filtering.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/50 transition-all duration-500">
                <ExternalLink className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">3. Apply Fast</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Find the newest jobs and be among the first to apply for superior response rates.
              </p>
            </div>
          </div>
        </div>

        {/* Time Parameters Info */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 backdrop-blur-xl border-purple-500/30 shadow-2xl shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                Available Time Filters
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                LinkedIn's hidden time parameters you can leverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(timeFrameMap).map(([timeFrame, value]) => (
                  <Badge 
                    key={timeFrame} 
                    variant="outline" 
                    className="justify-center p-3 text-sm border-gray-600/50 text-gray-300 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 bg-gray-800/30 backdrop-blur-sm"
                  >
                    {timeFrame}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
