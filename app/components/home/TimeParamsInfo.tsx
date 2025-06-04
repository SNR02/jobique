import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Clock } from 'lucide-react'
import { Badge } from '../ui/badge'
import timeFrameMap from '@/app/utils/timeFrames'

export default function TimeParamsInfo() {
  return (
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
                LinkedIn&#39;s hidden time parameters you can leverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(timeFrameMap).map(([timeFrame]) => (
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
  )
}
