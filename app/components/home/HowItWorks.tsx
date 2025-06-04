import { Clock, ExternalLink, Search } from 'lucide-react'
import React from 'react'

export default function HowItWorks() {
  return (
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
  )
}
