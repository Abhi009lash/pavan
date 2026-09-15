import React, { useState, useRef, useEffect } from 'react';

// Track motion path waypoints (percentage coordinates on 1178x785 canvas)
const TRACK_WAYPOINTS = [
  { x: 50.0, y: 82.0 }, // Start / Finish Line
  { x: 58.0, y: 82.0 },
  { x: 65.0, y: 78.0 },
  { x: 67.0, y: 70.0 },
  { x: 62.0, y: 64.0 },
  { x: 50.0, y: 64.0 },
  { x: 42.0, y: 58.0 },
  { x: 44.0, y: 50.0 },
  { x: 56.0, y: 50.0 },
  { x: 65.0, y: 45.0 },
  { x: 68.0, y: 35.0 },
  { x: 62.0, y: 28.0 },
  { x: 50.0, y: 28.0 },
  { x: 44.0, y: 34.0 },
  { x: 52.0, y: 38.0 },
  { x: 64.0, y: 38.0 },
  { x: 68.0, y: 48.0 },
  { x: 60.0, y: 54.0 },
  { x: 46.0, y: 54.0 },
  { x: 34.0, y: 48.0 },
  { x: 30.0, y: 38.0 },
  { x: 32.0, y: 25.0 },
  { x: 22.0, y: 22.0 },
  { x: 16.0, y: 32.0 },
  { x: 20.0, y: 45.0 },
  { x: 28.0, y: 52.0 },
  { x: 26.0, y: 65.0 },
  { x: 18.0, y: 72.0 },
  { x: 18.0, y: 80.0 },
  { x: 30.0, y: 82.0 },
  { x: 42.0, y: 82.0 },
  { x: 50.0, y: 82.0 }, // Back to Finish
];

export const PlaygroundSection: React.FC = () => {
  const [isRacing, setIsRacing] = useState(false);
  const [kartIndex, setKartIndex] = useState(0);
  const [kartAngle, setKartAngle] = useState(0);
  const [lapCount, setLapCount] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [statusText, setStatusText] = useState('Click any Car on the track to race!');
  const requestRef = useRef<number | null>(null);

  // Animate kart along waypoints
  useEffect(() => {
    if (!isRacing) return;

    let progress = 0;
    const totalWaypoints = TRACK_WAYPOINTS.length - 1;
    let lapsDone = 0;

    const animate = () => {
      progress += 0.006;
      if (progress >= totalWaypoints) {
        progress = 0;
        lapsDone += 1;
        setLapCount(lapsDone);
        if (lapsDone >= 3) {
          setIsRacing(false);
          setSpeed(0);
          setStatusText('🎉 Grand Prix Champion! You finished 3 Laps!');
          return;
        }
      }

      const currentIndex = Math.floor(progress);
      const nextIndex = (currentIndex + 1) % TRACK_WAYPOINTS.length;

      const p1 = TRACK_WAYPOINTS[currentIndex];
      const p2 = TRACK_WAYPOINTS[nextIndex];

      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      setKartIndex(progress);
      setKartAngle(angle);
      setSpeed(Math.floor(95 + Math.random() * 25));

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isRacing]);

  const handleStartRace = () => {
    if (isRacing) return;
    setIsRacing(true);
    setLapCount(0);
    setStatusText('🏎️ Vroom! Racing on the track...');
  };

  // Get current interpolation coordinates for active kart
  const getCurrentPos = () => {
    const currentIndex = Math.floor(kartIndex) % TRACK_WAYPOINTS.length;
    const nextIndex = (currentIndex + 1) % TRACK_WAYPOINTS.length;
    const t = kartIndex - Math.floor(kartIndex);

    const p1 = TRACK_WAYPOINTS[currentIndex];
    const p2 = TRACK_WAYPOINTS[nextIndex];

    const x = p1.x + (p2.x - p1.x) * t;
    const y = p1.y + (p2.y - p1.y) * t;

    return { x, y };
  };

  const currentPos = getCurrentPos();

  return (
    <section id="playground" className="relative w-full bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Figma Spec Title: You Can Click Car and it will */}
        <div className="text-center mb-8">
          <h2
            style={{
              fontFamily: "'Caveat Brush', 'Caveat', cursive, sans-serif",
              fontSize: '28px',
              lineHeight: '35px',
              color: '#C95E0C',
              fontWeight: 400,
            }}
            className="tracking-wide animate-bounce duration-1000"
          >
            You Can Click Car and it will
          </h2>
          <p className="font-['Jost'] text-sm text-neutral-500 mt-1">
            {statusText}
          </p>
        </div>

        {/* Track Canvas Container (Figma spec: 1178px x 785px) */}
        <div className="relative w-full max-w-[1178px] aspect-[1178/785] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-100 group">
          {/* Main Track Background Image */}
          <img
            src="/assets/playground/track_playground.png"
            alt="Interactive Go Kart Racing Track Layout"
            className="w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Interactive Start/Click Hotspot */}
          {!isRacing && (
            <button
              type="button"
              onClick={handleStartRace}
              className="absolute left-[50%] top-[82%] -translate-x-1/2 -translate-y-1/2 z-20 bg-[#F9C949] hover:bg-[#ebd532] text-black font-['Aleo'] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg border-2 border-black flex items-center gap-2 cursor-pointer transition-transform hover:scale-110 active:scale-95 animate-pulse"
            >
              <span>🏎️ Click Car to Drive!</span>
            </button>
          )}

          {/* Parked Karts on Pit Area (Right side clickable spots) */}
          {!isRacing && (
            <>
              <button
                type="button"
                onClick={handleStartRace}
                aria-label="Start Red Kart"
                className="absolute left-[77%] top-[34%] w-10 h-10 rounded-full hover:bg-red-500/20 flex items-center justify-center cursor-pointer transition-transform hover:scale-125"
                title="Click Red Kart to Race!"
              >
                <span className="text-xl">🏎️</span>
              </button>
              <button
                type="button"
                onClick={handleStartRace}
                aria-label="Start Blue Kart"
                className="absolute left-[85%] top-[34%] w-10 h-10 rounded-full hover:bg-blue-500/20 flex items-center justify-center cursor-pointer transition-transform hover:scale-125"
                title="Click Blue Kart to Race!"
              >
                <span className="text-xl">🏎️</span>
              </button>
            </>
          )}

          {/* Active Racing Kart */}
          {isRacing && (
            <div
              style={{
                left: `${currentPos.x}%`,
                top: `${currentPos.y}%`,
                transform: `translate(-50%, -50%) rotate(${kartAngle}deg)`,
              }}
              className="absolute z-30 transition-all duration-75 pointer-events-none"
            >
              <div className="relative flex items-center justify-center">
                {/* Exhaust Smoke / Spark Effect */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#F9C949]/70 rounded-full blur-xs animate-ping" />
                {/* Kart Icon */}
                <span className="text-2xl sm:text-3xl filter drop-shadow-md select-none">
                  🏎️
                </span>
              </div>
            </div>
          )}

          {/* Race Dashboard Overlay */}
          {isRacing && (
            <div className="absolute top-4 right-4 z-30 bg-black/85 text-white backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 flex items-center gap-4 text-xs sm:text-sm font-mono shadow-xl">
              <div className="flex items-center gap-1.5 text-[#F9C949]">
                <span>⚡ SPEED:</span>
                <span className="font-bold">{speed} km/h</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="text-emerald-400 font-bold">
                LAP: {lapCount + 1}/3
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
