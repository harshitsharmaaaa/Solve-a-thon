import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, Activity } from 'lucide-react';

const AnimatedHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 360);
      setSeconds(prev => (prev + 1) % 60);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden">
      <div className={`max-w-6xl w-full flex flex-col md:flex-row items-center gap-24 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Clock Animation */}
        <div className="relative w-96 h-96 flex-shrink-0">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          
          <div className="absolute inset-0 rounded-full border border-purple-500/30 backdrop-blur-sm bg-black/50">
            <div 
              className="absolute inset-0 rounded-full"
              style={{ 
                background: `conic-gradient(from ${progress}deg, transparent 0deg, rgba(168, 85, 247, 0.2) 60deg, transparent 120deg)`,
                animation: 'spin 4s linear infinite'
              }}
            />
            
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full"
                style={{
                  transform: `rotate(${i * 6}deg)`,
                  transformOrigin: 'center',
                }}
              >
                <div 
                  className={`w-0.5 h-2 absolute top-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
                    i % 5 === 0 ? 'h-3 bg-purple-400/60' : 'bg-purple-500/20'
                  } ${i === seconds ? 'opacity-100' : 'opacity-50'}`}
                />
              </div>
            ))}

            <div className="absolute inset-4 rounded-full border border-purple-500/20">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full"
                  style={{
                    transform: `rotate(${i * 30 + progress / 2}deg)`,
                    transformOrigin: 'center',
                  }}
                >
                  <div className="w-2 h-2 bg-purple-500/40 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
                </div>
              ))}
            </div>

            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-900/50 to-black flex items-center justify-center">
              <div className="relative w-full h-full">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      animation: `ping ${2 + i}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
                
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from ${-progress}deg, transparent 0deg, rgba(168, 85, 247, 0.3) 180deg, transparent 360deg)`,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
                
                <div className="absolute inset-4 rounded-full bg-black/80 flex items-center justify-center">
                  <div className="relative">
                    <Activity className="w-8 h-8 text-purple-500/70 animate-pulse" />
                    <Clock className="w-8 h-8 text-purple-400/50 absolute top-0 left-0 animate-spin" style={{ animationDuration: '10s' }} />
                  </div>
                </div>
              </div>
            </div>

            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-400/30"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${(i * 45) + progress}deg) translateX(${140 + Math.sin(progress / 30) * 10}px)`,
                  transformOrigin: 'left center',
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Section - Added md:pl-8 for more spacing */}
        <div className="text-center md:text-left space-y-8 md:pl-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="block transform transition-all duration-700 hover:scale-105">
              Join the
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text transform transition-all duration-700 hover:scale-105">
              Movement
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl leading-relaxed">
            Unlock the future of productivity with Huly.
            <br />
            <span className="text-purple-400">Remember, this journey is just getting started.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center justify-center gap-2">
                START NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 bg-purple-900/30 text-white rounded-full font-medium border border-purple-500/30 hover:bg-purple-900/50 transition-all duration-300 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-400" fill="currentColor">
                <path d="M6 9L12 15L18 9" />
              </svg>
              JOIN OUR SLACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;
