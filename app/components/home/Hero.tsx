import { Zap } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
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
  )
}
