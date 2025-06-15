import Link from "next/link";
import { Heart, Gift, Camera, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-amber-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-400 rounded-full blur-lg"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="flex justify-center space-x-6">
          <Link href="/" className="text-orange-800 font-medium hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/letter" className="text-orange-800 font-medium hover:text-orange-600 transition-colors">
            Letter
          </Link>
          <Link href="/gallery" className="text-orange-800 font-medium hover:text-orange-600 transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-orange-800 font-medium hover:text-orange-600 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="mb-8 animate-bounce">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-orange-900 mb-6 leading-tight">
          Happy
          <br />
          <span className="text-red-600">Father&apos;s Day</span>
        </h1>

        <p className="text-2xl md:text-3xl text-orange-800 mb-8 max-w-3xl leading-relaxed">
          To the most amazing dad in the world!
          <br />
          Thank you for being my hero, my guide, and my inspiration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
            <Link href="/letter">
              <Mail className="w-5 h-5 mr-2" />
              Read My Letter
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
          >
            <Link href="/gallery">
              <Camera className="w-5 h-5 mr-2" />
              View Our Memories
            </Link>
          </Button>
        </div>

        <div className="text-orange-700 text-lg">
          <Gift className="w-6 h-6 inline mr-2" />
          Made with love for the best dad ever
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Heart className="w-4 h-4 text-red-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-pulse delay-1000">
          <Heart className="w-3 h-3 text-pink-400 opacity-50" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-pulse delay-2000">
          <Heart className="w-5 h-5 text-red-500 opacity-40" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-pulse delay-500">
          <Heart className="w-3 h-3 text-pink-500 opacity-60" />
        </div>
      </div>
    </div>
  );
}
