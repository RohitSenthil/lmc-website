import { Share2, Download, Users } from "lucide-react";
import posterImage from "../images/LMCFinalPoster.jpg";
import posterPDF from "../images/Safe Streets Atlanta Poster.pdf"

export default function PosterSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spread the Word
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build awareness about Atlanta's pedestrian safety crisis. 
            Download and share our poster to advocate for safer streets in your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Poster Image */}
          <div className="animate-fade-in-left">
            <div className="bg-white rounded-xl shadow-lg p-6 hover-lift">
              <img 
                src={posterImage}
                alt="Safe Streets Atlanta advocacy poster showing pedestrian safety statistics and solutions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in-right">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Advocacy Movement
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                This poster contains compelling data behind our proposal and our three-point action plan. 
                Share it at community meetings, post it on social media, or display it 
                in public spaces to help build support for pedestrian safety improvements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Share2 className="h-5 w-5 text-safety-blue" />
                  <span className="text-gray-700">Share on social media</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="h-5 w-5 text-safety-blue" />
                  <span className="text-gray-700">Print for community events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-safety-blue" />
                  <span className="text-gray-700">Display in public spaces</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={posterPDF}
                  download="Safe Streets Atlanta Poster.pdf"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-safety-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover-scale"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Poster
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}