// Fun cartoon-style illustrations for kids

export function FloatingStar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 0L24.49 15.26L40 20L24.49 24.74L20 40L15.51 24.74L0 20L15.51 15.26L20 0Z"
        fill="currentColor"
        className="drop-shadow-sm"
      />
    </svg>
  );
}

export function HappyCloud({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none">
      <path
        d="M20 40C9 40 0 31 0 20C0 9 9 0 20 0C20 0 20 0 20 0C25 0 29 2 32 5C35 2 39 0 44 0C54 0 62 8 62 18C62 18 62 18 62 18C71 18 78 25 78 34C78 43 71 50 62 50H20Z"
        fill="currentColor"
        opacity="0.3"
      />
      <circle cx="25" cy="20" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="35" cy="20" r="3" fill="currentColor" opacity="0.6" />
      <path
        d="M20 28 Q30 32 40 28"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function RocketShip({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none">
      {/* Rocket body */}
      <ellipse cx="30" cy="50" rx="15" ry="25" fill="currentColor" opacity="0.4" />
      <ellipse cx="30" cy="45" rx="12" ry="20" fill="currentColor" opacity="0.6" />
      {/* Rocket tip */}
      <path d="M30 10 L20 30 L40 30 Z" fill="currentColor" opacity="0.5" />
      {/* Window */}
      <circle cx="30" cy="40" r="6" fill="white" opacity="0.8" />
      <circle cx="30" cy="40" r="4" fill="currentColor" opacity="0.3" />
      {/* Fins */}
      <path d="M15 50 L10 70 L20 70 Z" fill="currentColor" opacity="0.4" />
      <path d="M45 50 L50 70 L40 70 Z" fill="currentColor" opacity="0.4" />
      {/* Fire */}
      <path d="M20 70 Q25 75 30 70 Q35 75 40 70" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function TrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 60" fill="none">
      {/* Trophy base */}
      <rect x="15" y="50" width="20" height="8" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="18" y="45" width="14" height="6" rx="2" fill="currentColor" opacity="0.5" />
      {/* Trophy cup */}
      <path
        d="M10 20 L10 40 C10 45 15 48 20 48 C25 48 30 45 30 40 L30 20 L25 15 L20 15 Z"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Trophy handles */}
      <path
        d="M10 25 Q5 25 5 30 Q5 35 10 35"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M30 25 Q35 25 35 30 Q35 35 30 35"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      {/* Star on trophy */}
      <path
        d="M20 10 L21 15 L26 15 L22 18 L23 23 L20 20 L17 23 L18 18 L14 15 L19 15 Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

export function BookCharacter({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 80" fill="none">
      {/* Book body */}
      <rect x="15" y="20" width="40" height="50" rx="4" fill="currentColor" opacity="0.3" />
      <rect x="18" y="25" width="34" height="40" rx="2" fill="white" opacity="0.8" />
      {/* Book pages */}
      <line x1="35" y1="25" x2="35" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      {/* Face */}
      <circle cx="28" cy="40" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="42" cy="40" r="3" fill="currentColor" opacity="0.6" />
      <path
        d="M25 50 Q35 55 45 50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function LightBulb({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 60" fill="none">
      {/* Bulb */}
      <circle cx="25" cy="25" r="15" fill="currentColor" opacity="0.4" />
      <circle cx="25" cy="25" r="12" fill="currentColor" opacity="0.6" />
      {/* Base */}
      <rect x="20" y="38" width="10" height="8" rx="1" fill="currentColor" opacity="0.5" />
      {/* Light rays */}
      <path
        d="M10 25 L5 20 M40 25 L45 20 M25 10 L25 5 M25 40 L25 45"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
}

export function GameController({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 50" fill="none">
      {/* Controller body */}
      <rect x="10" y="15" width="40" height="25" rx="5" fill="currentColor" opacity="0.6" />
      <rect x="12" y="17" width="36" height="21" rx="3" fill="currentColor" opacity="0.8" />
      {/* Buttons */}
      <circle cx="22" cy="27" r="4" fill="white" opacity="0.9" />
      <circle cx="38" cy="27" r="4" fill="white" opacity="0.9" />
      {/* D-pad */}
      <rect x="15" y="20" width="6" height="2" rx="1" fill="white" opacity="0.9" />
      <rect x="17" y="18" width="2" height="6" rx="1" fill="white" opacity="0.9" />
      {/* Handles */}
      <ellipse cx="5" cy="25" rx="4" ry="8" fill="currentColor" opacity="0.5" />
      <ellipse cx="55" cy="25" rx="4" ry="8" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function RobotCharacter({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 70" fill="none">
      {/* Head */}
      <rect x="15" y="5" width="30" height="30" rx="5" fill="currentColor" opacity="0.6" />
      <rect x="17" y="7" width="26" height="26" rx="3" fill="currentColor" opacity="0.8" />
      {/* Eyes */}
      <circle cx="25" cy="18" r="4" fill="white" opacity="0.9" />
      <circle cx="35" cy="18" r="4" fill="white" opacity="0.9" />
      <circle cx="25" cy="18" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="35" cy="18" r="2" fill="currentColor" opacity="0.7" />
      {/* Antenna */}
      <circle cx="30" cy="5" r="3" fill="currentColor" opacity="0.6" />
      <line x1="30" y1="5" x2="30" y2="8" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      {/* Body */}
      <rect x="12" y="35" width="36" height="30" rx="5" fill="currentColor" opacity="0.6" />
      <rect x="14" y="37" width="32" height="26" rx="3" fill="currentColor" opacity="0.8" />
      {/* Buttons */}
      <circle cx="22" cy="48" r="2.5" fill="white" opacity="0.9" />
      <circle cx="30" cy="48" r="2.5" fill="white" opacity="0.9" />
      <circle cx="38" cy="48" r="2.5" fill="white" opacity="0.9" />
    </svg>
  );
}

export function WavingHand({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 60" fill="none">
      {/* Hand */}
      <ellipse cx="25" cy="35" rx="12" ry="18" fill="currentColor" opacity="0.6" />
      {/* Fingers */}
      <ellipse cx="15" cy="20" rx="4" ry="8" fill="currentColor" opacity="0.7" />
      <ellipse cx="20" cy="18" rx="4" ry="8" fill="currentColor" opacity="0.7" />
      <ellipse cx="25" cy="16" rx="4" ry="8" fill="currentColor" opacity="0.7" />
      <ellipse cx="30" cy="18" rx="4" ry="8" fill="currentColor" opacity="0.7" />
      <ellipse cx="35" cy="20" rx="4" ry="8" fill="currentColor" opacity="0.7" />
      {/* Wrist */}
      <rect x="20" y="45" width="10" height="12" rx="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function HeroCharacter({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 60" fill="none">
      {/* Head */}
      <circle cx="25" cy="15" r="10" fill="currentColor" opacity="0.6" />
      <circle cx="25" cy="15" r="8" fill="currentColor" opacity="0.8" />
      {/* Eyes */}
      <circle cx="22" cy="13" r="1.5" fill="white" />
      <circle cx="28" cy="13" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M20 18 Q25 21 30 18" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Body */}
      <path d="M25 25 L20 45 L25 50 L30 45 Z" fill="currentColor" opacity="0.6" />
      {/* Cape */}
      <path d="M20 30 Q15 35 12 40 Q10 45 15 50 Q20 48 25 50" fill="currentColor" opacity="0.4" />
      <path d="M30 30 Q35 35 38 40 Q40 45 35 50 Q30 48 25 50" fill="currentColor" opacity="0.4" />
      {/* Star on chest */}
      <path d="M25 32 L26 36 L30 36 L27 38 L28 42 L25 40 L22 42 L23 38 L20 36 L24 36 Z" fill="white" opacity="0.8" />
    </svg>
  );
}

export function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 50" fill="none">
      {/* Chart bars */}
      <rect x="8" y="30" width="8" height="15" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="20" y="20" width="8" height="25" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="32" y="15" width="8" height="30" rx="2" fill="currentColor" opacity="0.8" />
      <rect x="44" y="25" width="8" height="20" rx="2" fill="currentColor" opacity="0.6" />
      {/* Base line */}
      <line x1="5" y1="45" x2="55" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

export function MathIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none">
      {/* Calculator/Ruler shape */}
      <rect x="8" y="12" width="34" height="26" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="10" y="14" width="30" height="22" rx="1" fill="white" opacity="0.8" />
      {/* Math symbols */}
      <path d="M18 22 L22 22 M20 20 L20 24" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path d="M28 22 L32 26 M32 22 L28 26" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="38" cy="24" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function ScienceIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 60" fill="none">
      {/* Flask */}
      <path d="M20 5 L15 45 L35 45 L30 5 Z" fill="currentColor" opacity="0.4" />
      <path d="M22 8 L18 42 L32 42 L28 8 Z" fill="currentColor" opacity="0.6" />
      {/* Liquid */}
      <ellipse cx="25" cy="35" rx="6" ry="3" fill="currentColor" opacity="0.8" />
      {/* Bubbles */}
      <circle cx="23" cy="25" r="2" fill="white" opacity="0.6" />
      <circle cx="27" cy="28" r="1.5" fill="white" opacity="0.6" />
    </svg>
  );
}

export function HistoryIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none">
      {/* Book */}
      <rect x="12" y="10" width="26" height="32" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="14" y="12" width="22" height="28" rx="1" fill="white" opacity="0.8" />
      <line x1="25" y1="12" x2="25" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Clock */}
      <circle cx="25" cy="24" r="8" fill="currentColor" opacity="0.3" />
      <circle cx="25" cy="24" r="6" fill="white" opacity="0.9" />
      <line x1="25" y1="24" x2="25" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="25" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function EnglishIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none">
      {/* Pencil/Pen */}
      <path d="M15 35 L20 30 L25 35 L30 30 L25 25 L20 30 Z" fill="currentColor" opacity="0.5" />
      <rect x="18" y="12" width="4" height="18" rx="1" fill="currentColor" opacity="0.6" />
      {/* Paper */}
      <rect x="10" y="8" width="30" height="35" rx="1" fill="white" opacity="0.9" />
      <rect x="12" y="10" width="26" height="31" rx="0.5" fill="currentColor" opacity="0.1" />
      {/* Lines */}
      <line x1="15" y1="15" x2="35" y2="15" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="15" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="15" y1="25" x2="32" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

export function GeographyIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none">
      {/* Globe */}
      <circle cx="25" cy="25" r="18" fill="currentColor" opacity="0.3" />
      <circle cx="25" cy="25" r="16" fill="white" opacity="0.8" />
      {/* Latitude lines */}
      <ellipse cx="25" cy="25" rx="16" ry="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <ellipse cx="25" cy="25" rx="16" ry="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Longitude lines */}
      <ellipse cx="25" cy="25" rx="4" ry="16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <ellipse cx="25" cy="25" rx="8" ry="16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Continents */}
      <path d="M15 20 Q18 18 20 20 Q22 22 20 24 Q18 26 15 24 Z" fill="currentColor" opacity="0.4" />
      <path d="M30 28 Q32 26 35 28 Q33 30 30 30 Z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function CrownIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 40" fill="none">
      {/* Crown base */}
      <path d="M5 30 L10 20 L15 25 L20 15 L25 20 L30 15 L35 20 L40 25 L45 20 L50 30 Z" fill="currentColor" opacity="0.6" />
      <path d="M8 28 L12 20 L18 24 L22 18 L25 20 L28 18 L32 24 L38 20 L42 28 Z" fill="currentColor" opacity="0.8" />
      {/* Crown points */}
      <path d="M15 15 L18 10 L21 15" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M25 12 L28 7 L31 12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M35 15 L38 10 L41 15" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      {/* Gems */}
      <circle cx="18" cy="12" r="2" fill="white" opacity="0.9" />
      <circle cx="28" cy="9" r="2.5" fill="white" opacity="0.9" />
      <circle cx="38" cy="12" r="2" fill="white" opacity="0.9" />
    </svg>
  );
}

export function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      {/* Coin body */}
      <circle cx="20" cy="20" r="18" fill="#fbbf24" />
      <circle cx="20" cy="20" r="15" fill="#f59e0b" />
      <circle cx="20" cy="20" r="12" fill="#fbbf24" />
      {/* Dollar sign */}
      <text x="20" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">$</text>
      {/* Shine effect */}
      <ellipse cx="14" cy="14" rx="4" ry="3" fill="white" opacity="0.4" />
    </svg>
  );
}

export function GiftBoxIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none">
      {/* Box body */}
      <rect x="8" y="22" width="34" height="24" rx="3" fill="#ec4899" />
      <rect x="10" y="24" width="30" height="20" rx="2" fill="#f472b6" />
      {/* Lid */}
      <rect x="5" y="15" width="40" height="10" rx="2" fill="#ec4899" />
      <rect x="7" y="17" width="36" height="6" rx="1" fill="#f472b6" />
      {/* Ribbon vertical */}
      <rect x="22" y="15" width="6" height="31" fill="#fbbf24" />
      {/* Ribbon horizontal */}
      <rect x="5" y="18" width="40" height="4" fill="#fbbf24" />
      {/* Bow */}
      <ellipse cx="18" cy="12" rx="6" ry="4" fill="#fbbf24" />
      <ellipse cx="32" cy="12" rx="6" ry="4" fill="#fbbf24" />
      <circle cx="25" cy="14" r="3" fill="#f59e0b" />
      {/* Sparkles */}
      <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.8" />
      <circle cx="40" cy="8" r="1" fill="white" opacity="0.8" />
      <circle cx="42" cy="30" r="1.5" fill="white" opacity="0.6" />
    </svg>
  );
}

export function QbitDoll({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 140" fill="none">
      {/* Spotlight effect background */}
      <ellipse cx="50" cy="130" rx="45" ry="8" fill="currentColor" opacity="0.1" />
      
      {/* Pedestal */}
      <ellipse cx="50" cy="135" rx="40" ry="5" fill="currentColor" opacity="0.2" />
      <ellipse cx="50" cy="133" rx="35" ry="3" fill="currentColor" opacity="0.15" />
      
      {/* Body - Shirt */}
      <rect x="30" y="60" width="40" height="35" rx="8" fill="#ffffff" />
      {/* V-neck */}
      <path d="M40 60 L50 70 L60 60" stroke="#166534" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Chest stripe */}
      <rect x="25" y="72" width="50" height="8" fill="#166534" />
      {/* White circle on stripe */}
      <circle cx="50" cy="76" r="4" fill="#ffffff" />
      <circle cx="50" cy="76" r="3" fill="#166534" />
      {/* Sleeve bands */}
      <rect x="28" y="68" width="4" height="12" rx="2" fill="#166534" />
      <rect x="68" y="68" width="4" height="12" rx="2" fill="#166534" />
      
      {/* Arms */}
      <ellipse cx="20" cy="75" rx="6" ry="18" fill="#e5e7eb" />
      <ellipse cx="80" cy="75" rx="6" ry="18" fill="#e5e7eb" />
      
      {/* Shorts */}
      <path d="M28 95 Q28 90 30 90 L70 90 Q72 90 72 95 L72 110 Q72 115 70 115 L30 115 Q28 115 28 110 Z" fill="#f5f5dc" />
      {/* Green stripes on shorts */}
      <line x1="35" y1="90" x2="35" y2="115" stroke="#166534" strokeWidth="2" />
      <line x1="40" y1="90" x2="40" y2="115" stroke="#166534" strokeWidth="2" />
      <line x1="60" y1="90" x2="60" y2="115" stroke="#166534" strokeWidth="2" />
      <line x1="65" y1="90" x2="65" y2="115" stroke="#166534" strokeWidth="2" />
      {/* Buttons on shorts */}
      <circle cx="68" cy="100" r="1" fill="#000000" />
      <circle cx="68" cy="105" r="1" fill="#000000" />
      
      {/* Legs */}
      <ellipse cx="35" cy="120" rx="5" ry="12" fill="#e5e7eb" />
      <ellipse cx="65" cy="120" rx="5" ry="12" fill="#e5e7eb" />
      
      {/* Shoes */}
      <ellipse cx="35" cy="130" rx="6" ry="4" fill="#dc2626" />
      <ellipse cx="65" cy="130" rx="6" ry="4" fill="#dc2626" />
      <ellipse cx="35" cy="131" rx="5" ry="2" fill="#ffffff" />
      <ellipse cx="65" cy="131" rx="5" ry="2" fill="#ffffff" />
      
      {/* Head */}
      <circle cx="50" cy="35" r="25" fill="#f3f4f6" />
      
      {/* Eyes */}
      <ellipse cx="45" cy="32" rx="3" ry="4" fill="#000000" />
      <ellipse cx="55" cy="32" rx="3" ry="4" fill="#000000" />
    </svg>
  );
}

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating stars */}
      <FloatingStar className="absolute top-20 left-10 w-8 h-8 text-yellow-300 opacity-25 animate-float" />
      <FloatingStar className="absolute top-40 right-20 w-6 h-6 text-purple-300 opacity-20 animate-float-reverse" style={{ animationDelay: '1s' }} />
      <FloatingStar className="absolute bottom-40 left-20 w-7 h-7 text-pink-300 opacity-22 animate-gentle-bounce" style={{ animationDelay: '2s' }} />
      
      {/* Happy clouds */}
      <HappyCloud className="absolute top-10 right-10 w-24 h-16 text-blue-200 opacity-18 animate-float" style={{ animationDelay: '0.5s' }} />
      <HappyCloud className="absolute bottom-20 left-5 w-20 h-12 text-purple-200 opacity-15 animate-float-reverse" style={{ animationDelay: '1.5s' }} />
      
      {/* Rocket ships */}
      <RocketShip className="absolute top-60 right-5 w-12 h-16 text-orange-300 opacity-18 animate-float" style={{ animationDelay: '2.5s' }} />
      <RocketShip className="absolute bottom-60 left-10 w-10 h-14 text-pink-300 opacity-15 animate-float-reverse" style={{ animationDelay: '3s' }} />
    </div>
  );
}
