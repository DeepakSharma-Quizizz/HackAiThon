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
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl border-2 border-white shadow-md p-4 text-white relative overflow-hidden">
        <div className="absolute bottom-2 left-2 opacity-20">
          <FloatingStar className="w-10 h-10 text-white" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Current Streak</h3>
            <Flame className="w-4 h-4" />
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-1">{currentStreak}</div>
            <div className="text-xs opacity-90">days in a row</div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white rounded-xl border-2 border-yellow-100 shadow-md p-4 relative overflow-hidden">
        <div className="absolute top-3 right-3 opacity-10">
          <TrophyIcon className="w-12 h-14 text-yellow-400" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">Badges</h3>
            <span className="text-xs text-yellow-600 font-semibold bg-yellow-50 px-2 py-0.5 rounded-full">
              {badges.filter(b => b.unlocked).length}/{badges.length}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${badge.color} flex flex-col items-center justify-center p-3 relative overflow-hidden group ${
                  badge.unlocked 
                    ? 'shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300 border-2 border-white/50' 
                    : 'opacity-40 grayscale border-2 border-gray-300'
                }`}
                style={badge.unlocked ? {
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(255, 255, 255, 0.3) inset'
                } : {}}
              >
                {/* Shine effect for unlocked badges */}
                {badge.unlocked && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-1 right-1 opacity-60">
                      <FloatingStar className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-1 left-1 opacity-40">
                      <FloatingStar className="w-3 h-3 text-white" />
                    </div>
                  </>
                )}
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-1.5 transform group-hover:scale-110 transition-transform duration-300">
                    {badge.iconType === 'perfect' ? (
                      <span className="text-xl font-black text-white drop-shadow-lg">100</span>
                    ) : (
                      <BadgeIcon type={badge.iconType} className="w-7 h-7 text-white drop-shadow-lg" />
                    )}
                  </div>
                  <div className="text-xs font-bold text-white text-center leading-tight drop-shadow-md">
                    {badge.name}
                  </div>
                </div>
                
                {/* Glow effect for unlocked badges */}
                {badge.unlocked && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.4) inset, 0 0 30px rgba(255, 255, 255, 0.2)'
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-xl border-2 border-purple-100 shadow-md p-4 relative overflow-hidden">
        <div className="absolute bottom-3 right-3 opacity-10">
          <FloatingStar className="w-10 h-10 text-purple-400" />
        </div>
        <div className="relative z-10">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Milestones</h3>
        <div className="space-y-3">
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
      </div>
    </section>
  );
}
