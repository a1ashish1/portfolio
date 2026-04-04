"use client";

import { useState } from "react";

const photos = [
  { src: "/assets/20260303_180857.jpg", alt: "At Udaipur lakeside" },
  { src: "/assets/IMG-20260131-WA0048.jpg", alt: "Casual portrait" },
  { src: "/assets/IMG-20251213-WA0013.jpeg", alt: "Traditional look" },
  { src: "/assets/20241001_075506.jpg", alt: "At Pangong Lake" },
  { src: "/assets/20241001_074829.jpg", alt: "Bike ride at Pangong Lake" },
  { src: "/assets/20240929_113035.jpg", alt: "At Ladakh signpost" },
];

interface PhotoGalleryProps {
  title: string;
}

export function PhotoGallery({ title }: PhotoGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mb-2">
      <h2 className="font-serif text-xl md:text-2xl text-bio-maroon mb-5 sm:mb-6 text-center tracking-wide">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-[3/4] overflow-hidden rounded border border-bio-gold-muted hover:border-bio-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bio-gold/50"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 print:hidden"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected((prev) =>
                prev !== null
                  ? (prev - 1 + photos.length) % photos.length
                  : null
              );
            }}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Previous photo"
          >
            &#8249;
          </button>

          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected((prev) =>
                prev !== null ? (prev + 1) % photos.length : null
              );
            }}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
