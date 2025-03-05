
import React from 'react';

export default function ScrollingBanner() {
  return (
    <div className="bg-primary/10 py-3 overflow-hidden w-full">
      <div className="animate-marquee-fast flex whitespace-nowrap">
        {/* We repeat the message multiple times to ensure continuous flow */}
        {Array(10).fill(0).map((_, index) => (
          <span key={index} className="inline-block mx-4 font-semibold">
            Plus de 100 personnes aidées depuis 2019
          </span>
        ))}
      </div>
    </div>
  );
}
