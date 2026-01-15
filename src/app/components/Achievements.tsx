import { Trophy, Flame, Star, Zap, Award, Crown } from 'lucide-react';
import { TrophyIcon, FloatingStar, CrownIcon } from './CartoonIllustrations';

// Create additional badge icons
const BadgeIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case 'trophy':
      return <TrophyIcon className={className} />;
    case 'lightning':
      return <Zap className={className} />;
    case 'perfect':
      return <span className={className}>100</span>;
    case 'flame':
      return <Flame className={className} />;
    case 'crown':
      return <Crown className={className} />;
    case 'star':
      return <FloatingStar className={className} />;
    default:
      return <Award className={className} />;
  }
};

const badges = [
  { id: 1, name: 'First Win', iconType: 'trophy', unlocked: true, color: 'from-yellow-400 to-orange-500' },
  { id: 2, name: 'Speed Demon', iconType: 'lightning', unlocked: true, color: 'from-purple-400 to-pink-500' },
  { id: 3, name: 'Perfect Score', iconType: 'perfect', unlocked: true, color: 'from-green-400 to-emerald-500' },
  { id: 4, name: 'Streak Master', iconType: 'flame', unlocked: true, color: 'from-red-400 to-orange-500' },
  { id: 5, name: 'Knowledge King', iconType: 'crown', unlocked: false, color: 'from-gray-300 to-gray-400' },
  { id: 6, name: 'Quiz Legend', iconType: 'star', unlocked: false, color: 'from-gray-300 to-gray-400' },
];

const milestones = [
  { id: 1, label: 'Questions answered', value: 847, target: 1000, icon: Zap, color: 'blue' },
  { id: 2, label: 'Perfect scores', value: 12, target: 20, icon: Star, color: 'yellow' },
  { id: 3, label: 'Games played', value: 156, target: 200, icon: Trophy, color: 'purple' },
];

const colorClasses = {
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
};

export function Achievements() {
  const currentStreak = 7;
  const longestStreak = 12;

  return (
    <section className="space-y-3">
      {/* Streak Card */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 shadow-md border-2 border-white text-white">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-base">Current Streak</h3>
          <Flame className="w-5 h-5" />
        </div>
        <div className="text-center mb-2">
          <div className="text-5xl font-black mb-1">{currentStreak}</div>
          <div className="text-xs opacity-90 flex items-center justify-center gap-1">
            <span>days in a row!</span>
            <Flame className="w-3 h-3" />
          </div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
            <div className="flex items-center justify-between text-sm">
              <span>Longest streak:</span>
              <span className="font-bold">{longestStreak} days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Badges
          </h3>
          <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
            {badges.filter(b => b.unlocked).length}/{badges.length}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${badge.color} flex flex-col items-center justify-center p-3 ${
                badge.unlocked
                  ? 'shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all cursor-pointer'
                  : 'opacity-40 grayscale'
              }`}
            >
              <div className="mb-1 flex items-center justify-center">
                {badge.iconType === 'perfect' ? (
                  <span className="text-2xl font-black text-white">100</span>
                ) : (
                  <BadgeIcon type={badge.iconType} className="w-8 h-8 text-white" />
                )}
              </div>
              <div className="text-xs font-bold text-white text-center leading-tight">
                {badge.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-5 h-5 text-purple-500" />
          <h3 className="font-bold text-lg text-gray-800">Milestones</h3>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone) => {
            const percentage = Math.min((milestone.value / milestone.target) * 100, 100);
            const Icon = milestone.icon;
            const circumference = 2 * Math.PI * 32;
            const offset = circumference - (percentage / 100) * circumference;

            return (
              <div 
                key={milestone.id} 
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border-2 border-gray-100 hover:border-purple-200 transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Circular Progress */}
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <svg className="transform -rotate-90 w-16 h-16">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className={`transition-all duration-700 ${colorClasses[milestone.color].replace('bg-', 'text-')}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-10 h-10 ${colorClasses[milestone.color]} rounded-lg flex items-center justify-center shadow-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-800">
                        {milestone.label}
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {milestone.value}/{milestone.target}
                      </span>
                    </div>
                    {/* Visual blocks progress */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const filled = (i + 1) * 10 <= percentage;
                        return (
                          <div
                            key={i}
                            className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                              filled
                                ? colorClasses[milestone.color]
                                : 'bg-gray-200'
                            }`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
