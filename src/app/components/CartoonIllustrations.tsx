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

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating stars */}
      <FloatingStar className="absolute top-20 left-10 w-8 h-8 text-yellow-300 opacity-30 animate-float" />
      <FloatingStar className="absolute top-40 right-20 w-6 h-6 text-purple-300 opacity-20 animate-float-reverse" style={{ animationDelay: '1s' }} />
      <FloatingStar className="absolute bottom-40 left-20 w-7 h-7 text-pink-300 opacity-25 animate-gentle-bounce" style={{ animationDelay: '2s' }} />
      
      {/* Happy clouds */}
      <HappyCloud className="absolute top-10 right-10 w-24 h-16 text-blue-200 opacity-20 animate-float" style={{ animationDelay: '0.5s' }} />
      <HappyCloud className="absolute bottom-20 left-5 w-20 h-12 text-purple-200 opacity-15 animate-float-reverse" style={{ animationDelay: '1.5s' }} />
      
      {/* Rocket ships */}
      <RocketShip className="absolute top-60 right-5 w-12 h-16 text-orange-300 opacity-20 animate-float" style={{ animationDelay: '2.5s' }} />
      <RocketShip className="absolute bottom-60 left-10 w-10 h-14 text-pink-300 opacity-15 animate-float-reverse" style={{ animationDelay: '3s' }} />
    </div>
  );
}
