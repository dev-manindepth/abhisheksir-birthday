import React, { useState } from 'react';
import { Confetti } from '../Confetti';

export default function HeroActions() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };
  const handleScroll = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        onClick={(e) => handleScroll(e, 'add-message')}
      >
        Send Birthday Wish
      </button>
      {showConfetti && <Confetti />}
      <button
        className="bg-yellow-400 text-white px-8 py-3 rounded-full hover:bg-yellow-500 transition"
        onClick={handleClick}
      >
        Celebrate 🎉
      </button>
      <button
        className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
        onClick={(e) => handleScroll(e, 'messages')}
      >
        View Team Messages
      </button>
    </div>
  );
}
