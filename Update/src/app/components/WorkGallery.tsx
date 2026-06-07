import { ArrowLeft } from 'lucide-react';

interface GalleryItem {
  filename: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    filename: 'bekerja.jpg',
    description: 'Lamp shade press machine operations',
  },
  {
    filename: 'membetulkan.jpg',
    description: 'Diagnosing and fixing issues in press machine system',
  },
];

interface WorkGalleryProps {
  onBack: () => void;
}

export function WorkGallery({ onBack }: WorkGalleryProps) {
  return (
    <div className="min-h-screen bg-[#0D1114] text-white px-8 py-16">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A8FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern id="organic-grid-work" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#00A8FF"/>
                <path d="M30 30 L60 30 M30 30 L30 60" stroke="#00A8FF" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic-grid-work)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-[#00A8FF]/50 transition-all duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-['Inter']" style={{ fontSize: '1rem' }}>Back</span>
          </button>

          <h1 className="font-['Syne'] font-bold mb-4" style={{ fontSize: '3rem', letterSpacing: '0.02em' }}>
            Work Experience Gallery
          </h1>
          <p className="font-['Inter'] text-white/70" style={{ fontSize: '1.25rem' }}>
            Production Operator at PT. Asahi Agung Abadi Mandiri (November 2021 - August 2023)
          </p>
        </div>

        {/* Gallery Grid - 2 columns for larger images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#00A8FF]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00A8FF]/20"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#00A8FF]/20 to-[#00C875]/20 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1114] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-['Inter'] text-xs text-white/60">{item.filename}</p>
                </div>
              </div>

              {/* Description */}
              <div className="p-8">
                <p className="font-['Inter'] text-white" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
