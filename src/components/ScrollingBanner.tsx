
import React from 'react';

export default function ScrollingBanner() {
  return (
    <div className="bg-primary/10 py-4 overflow-hidden w-full flex justify-center items-center">
      <div className="text-center animate-pulse-highlight">
        <span className="font-semibold text-lg md:text-xl">
          Plus de 100 personnes aidées depuis 2019
        </span>
      </div>
    </div>
  );
}
