import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      {/* Navigation */}
      <nav className="mb-8">
        <Button
          asChild
          variant="ghost"
          className="text-orange-800 hover:text-orange-600"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-2">
            A Letter to My Dad
          </h1>
          <p className="text-orange-700 text-lg">From the heart</p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-orange-200">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="text-xl mb-6 text-orange-800 font-medium">
                Dear Dad,
              </p>

              <p className="mb-6">
                On this special Father's Day, I want to take a moment to express
                just how much you mean to me. Words can hardly capture the depth
                of my gratitude for everything you've done, but I'll try my
                best.
              </p>

              <p className="mb-6">
                You've been my rock, my mentor, and one of my biggest supporters
                throughout my entire life. You did miss me taking my first
                steps, but you made sure that when I take them, the ground is
                covered with soft linen and fur. You did not see me ride my
                first bike, but you made sure that it is a bike I would love.
                You were away for most part of my life but you made sure that
                every moment I live, provide me utmost comfort.From hearing me
                rant about my class teacher to ranting about the corporate,
                you've always been there with patience, wisdom, and
                unconditional love.
              </p>

              <p className="mb-6">
                I remember all the nights maa was up with me during my exams and
                on nights when I was sick and I would ask her why could we not
                have a complete family, but it's now that I understand that you
                were working hard to provide us with the best life possible.
                Your dedication and sacrifices have not gone unnoticed, and I am
                forever grateful for the life you've given us.
              </p>

              <p className="mb-6">
                Things were not always normal in our family and everyone had
                differences and for a long time, I saw you as an outsider,
                almost like an imposter in my life. But now I realize you were
                just a person, trying your best in your own way. You might not
                be perfect, you might not have been the husband maa always
                wanted or the father I always cheered for, but you were the
                person we all needed and we still do. I guess that's how life balances itself —
                God gives us what is truly important, what we need, even if we
                don't see it at the time. For that, I am more than grateful.
              </p>
              <p className="mb-6">
                There are still things that I have in me that I wish I could
                tell you and I am scared or maybe sure that you would not
                understand, but I know that you would always listen. I do have a
                side anyone would not like at first and I have a bag of personalities in me
                but trust me that won't affect anyone negatively. It is just who I am or is the way I am.
              </p>
              <p className="mb-6">
                There are quite a lot of things I wish I could have done
                differently, like spending more time with you, sharing more
                moments, and understanding you better. But I know that life is
                not always in our control, and we must make the best of what we
                have.
              </p>
              <p className="mb-6">
                Thank you for all the sacrifices you've made, the lessons you've
                taught me, and the memories we've created together. Thank you
                for being not just my father, but also my agony aunt, my comfort
                zone and my diary.
              </p>
              <p className="mb-6">
                I hope this day brings you as much joy as you've brought into my
                life. You deserve all the happiness in the world, and I'm so
                proud to be your child.
              </p>

              <p className="text-xl font-medium text-orange-800">
                Happy Father's Day, Dad. I love you more than words can say.
              </p>

              <p className="mt-8 text-right text-orange-700 font-medium">
                With all my love,
                <br />
                Your loving child ❤️
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
