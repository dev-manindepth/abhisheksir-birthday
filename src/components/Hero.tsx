import { PartyPopper } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 relative">
        <div className="flex justify-center mb-6">
          <PartyPopper className="w-12 h-12 text-orange-500" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Give a <span className="text-orange-500">surprise</span> to your{' '}
          <span className="text-pink-500">loved one</span> on their{' '}
          <span className="text-blue-500">birthday</span>.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Get a Surprise
          </button>
          <button className="border border-black px-8 py-3 rounded-full hover:bg-gray-50 transition">
            See Our Gallery
          </button>
        </div>
        <div className="mt-12 text-gray-600">
          <span className="font-semibold text-black">12,000+</span> Successful Birthday Parties
        </div>
      </div>
    </div>
  );
}