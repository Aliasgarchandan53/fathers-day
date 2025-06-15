import Link from "next/link";
import { ArrowLeft, MessageCircle, Mail, Linkedin, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      {/* Navigation */}
      <nav className="mb-8">
        <Button asChild variant="ghost" className="text-orange-800 hover:text-orange-600">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-2">Let&apos;s Stay Connected</h1>
          <p className="text-orange-700 text-lg">
            Dad, reach out to me anytime you want to chat, share a story, or just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* WhatsApp */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-green-200 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-green-700">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Send me a quick message or give me a call anytime!</p>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white w-full">
                <Link href="https://wa.me/+917297000253" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-2">Drop me a message anytime!</p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-blue-200 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-700">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Drop me an email for longer conversations or sharing photos!</p>
              <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 w-full">
                <Link href="mailto:aliasgarchandan53@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-2">Drop me a mail papa ;)</p>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-blue-600 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-800">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Connect with me professionally and see what I&apos;m up to!</p>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full">
                <Link href="https://linkedin.com/in/ali-asgar-chandan-9806861b5" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-2">Click here to see your son grow professionally :)</p>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-orange-200 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-orange-700">Phone Call</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Nothing beats hearing your voice! Call me anytime.</p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                <Link href="tel:+917297000253">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Me
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-2">ISD calls are expensive...still if you want to hear my voice, just call!</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 p-8 bg-white/60 backdrop-blur-sm rounded-lg border border-orange-200">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Dad, you mean the world to me! 💝</h3>
          <p className="text-orange-800 max-w-xl mx-auto leading-relaxed">
            Your love, support, and wisdom have shaped me into who I am today. I&apos;m grateful every day to have you as my father.
          </p>
        </div>
      </div>
    </div>
  );
}
