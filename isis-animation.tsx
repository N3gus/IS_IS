import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ISISAnimation = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Network topology
  const routers = [
    { id: 'R1', x: 100, y: 100, area: '49.0001' },
    { id: 'R2', x: 300, y: 100, area: '49.0001' },
    { id: 'R3', x: 200, y: 250, area: '49.0001' },
  ];
  
  const links = [
    { from: 'R1', to: 'R2', cost: 10 },
    { from: 'R2', to: 'R3', cost: 10 },
    { from: 'R3', to: 'R1', cost: 15 },
  ];
  
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prev) => (prev + 1) % 5);
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);
  
  const renderDescription = () => {
    const descriptions = [
      "Step 1: Initial Network State - Routers establish adjacencies with neighbors",
      "Step 2: Hello Packets Exchange - Routers discover their neighbors",
      "Step 3: LSP Generation - Each router creates Link State Packets",
      "Step 4: LSP Flooding - Routers share topology information",
      "Step 5: SPF Calculation - Each router computes shortest paths",
    ];
    return descriptions[step];
  };
  
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>IS-IS Protocol Operation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-96 bg-slate-100 rounded-lg p-4">
          {/* Draw links */}
          {links.map((link, i) => {
            const from = routers.find(r => r.id === link.from);
            const to = routers.find(r => r.id === link.to);
            return (
              <svg key={i} className="absolute top-0 left-0 w-full h-full">
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={step >= 1 ? "#000" : "#ccc"}
                  strokeWidth="2"
                />
                {step >= 2 && (
                  <circle
                    cx={(from.x + to.x) / 2}
                    cy={(from.y + to.y) / 2}
                    r="5"
                    fill="#4CAF50"
                    className="animate-pulse"
                  />
                )}
              </svg>
            );
          })}
          
          {/* Draw routers */}
          {routers.map((router, i) => (
            <div
              key={router.id}
              className="absolute transform transition-all duration-300"
              style={{
                left: router.x - 25,
                top: router.y - 25,
                opacity: step >= 0 ? 1 : 0,
                scale: step >= 0 ? '1' : '0',
                transitionDelay: `${i * 200}ms`
              }}
            >
              <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                {/* Simple router icon using HTML/CSS */}
                <div className={`w-6 h-6 border-2 rounded ${step >= 3 ? "border-blue-500" : "border-gray-400"}`}>
                  <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-px p-1">
                    <div className={`${step >= 3 ? "bg-blue-500" : "bg-gray-400"}`}></div>
                    <div className={`${step >= 3 ? "bg-blue-500" : "bg-gray-400"}`}></div>
                    <div className={`${step >= 3 ? "bg-blue-500" : "bg-gray-400"}`}></div>
                    <div className={`${step >= 3 ? "bg-blue-500" : "bg-gray-400"}`}></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 font-medium">{router.id}</div>
              {step >= 4 && (
                <div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full 
                           transform transition-transform duration-300 animate-pulse"
                />
              )}
            </div>
          ))}
          
          {/* Animation overlays based on step */}
          {step === 3 && (
            <div
              className="absolute inset-0 bg-blue-500 bg-opacity-10 
                       transition-opacity duration-500"
            />
          )}
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-medium mb-4">{renderDescription()}</p>
          <div className="flex gap-4">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline"
            >
              {isPlaying ? "Pause" : "Play"} Animation
            </Button>
            <Button
              onClick={() => setStep((prev) => (prev + 1) % 5)}
              variant="outline"
            >
              Next Step →
            </Button>
            <Button
              onClick={() => setStep(0)}
              variant="outline"
            >
              Reset ↻
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ISISAnimation;
