"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const photos = [
    {
      id: 1,
      src: "/dad1.jpg",
      alt: "Dad and me - Memory 1",
      width: 300,
      height: 300,
    },
    {
      id: 2,
      src: "/dad2.jpg",
      alt: "Dad and me - Memory 2",
      width: 300,
      height: 300,
    },
    {
      id: 3,
      src: "/dad3.jpg",
      alt: "Dad and me - Memory 3",
      width: 300,
      height: 300,
    },
    {
      id: 4,
      src: "/dad4.jpg",
      alt: "Dad and me - Memory 4",
      width: 300,
      height: 300,
    },
  ];

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

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Camera className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-2">
            Our Precious Memories
          </h1>
          <p className="text-orange-700 text-lg">
            A collection of our favorite moments together
          </p>
        </div>

        {/* Hexagonal Gallery */}
        <div className="flex justify-center">
          <div className="hexagon-gallery">
            {/* Top row - 2 hexagons */}
            <div className="hex-row hex-row-1">
              <div className="hexagon">
                <div className="hexagon-inner">
                  <Image
                    src={photos[0].src || "/placeholder.svg"}
                    alt={photos[0].alt}
                    width={300}
                    height={300}
                    className="hexagon-image"
                  />
                </div>
              </div>
              <div className="hexagon">
                <div className="hexagon-inner">
                  <Image
                    src={photos[1].src || "/placeholder.svg"}
                    alt={photos[1].alt}
                    width={300}
                    height={300}
                    className="hexagon-image"
                  />
                </div>
              </div>
            </div>

            {/* Middle row - 2 hexagons */}
            <div className="hex-row hex-row-2">
              <div className="hexagon">
                <div className="hexagon-inner">
                  <Image
                    src={photos[2].src || "/placeholder.svg"}
                    alt={photos[2].alt}
                    width={300}
                    height={300}
                    className="hexagon-image"
                  />
                </div>
              </div>
              <div className="hexagon">
                <div className="hexagon-inner">
                  <Image
                    src={photos[3].src || "/placeholder.svg"}
                    alt={photos[3].alt}
                    width={300}
                    height={300}
                    className="hexagon-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-orange-700 text-lg italic">
            {
              "Every picture tells a story of love, laughter, and unforgettable moments"
            }
          </p>
        </div>
      </div>

      <style jsx>{`
        .hexagon-gallery {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: -20px;
        }

        .hex-row {
          display: flex;
          gap: 20px;
        }

        .hex-row-2 {
          margin-top: -40px;
        }

        .hex-row-3 {
          margin-top: -40px;
        }

        .hexagon {
          width: 200px;
          height: 200px;
          position: relative;
          margin: 20px;
        }

        .hexagon-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform: rotate(30deg);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hexagon:hover .hexagon-inner {
          transform: rotate(30deg) scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .hexagon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: rotate(-30deg) scale(1.2);
        }

        @media (max-width: 768px) {
          .hexagon {
            width: 150px;
            height: 150px;
            margin: 10px;
          }

          .hex-row {
            gap: 10px;
          }

          .hex-row-2,
          .hex-row-3 {
            margin-top: -30px;
          }
        }
      `}</style>
    </div>
  );
}
