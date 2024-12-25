import { Gift } from 'lucide-react';
import HeroTitle from './HeroTitle';
import HeroActions from './HeroActions';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-white" id='hero'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e6e6ff_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 relative">
        <div className="flex justify-center mb-6">
          <Gift className="w-16 h-16 text-blue-500" />
        </div>
        <HeroTitle />
        <HeroActions />
        <div className="mt-12 text-gray-600">
          <span className="font-semibold text-black">Together with</span>{' '}
          all 6 team members
        </div>
      </div>
    </div>
  );
}