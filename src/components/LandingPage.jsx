import React from 'react'
import OptimizedHeroSection from './OptimizedHeroSection'
import PracticeSection from './PracticeSection'
import UnlimitedPracticeSection from './UnlimitedPracticeSection'
import PersonalizedSection from './PersonalizedSection'
import AcademicManagement from './AcademicManagement'
import ResearchSection from './ResearchSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <OptimizedHeroSection />
      
      <div className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <PracticeSection />
          <UnlimitedPracticeSection />
          <PersonalizedSection />
          <AcademicManagement />
          <ResearchSection />
          <FAQSection />

          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Crafted for all your academic needs.
            </h2>
            <button className="w-full sm:w-auto bg-[#2563EB] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
