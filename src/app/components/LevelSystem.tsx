import { TrendingUp, Zap, Star } from 'lucide-react';

interface LevelSystemProps {
  level: number;
  currentXP: number;
  xpToNextLevel: number;
  totalXP: number;
}

export function LevelSystem({ level, currentXP, xpToNextLevel, totalXP }: LevelSystemProps) {
  const progressPercentage = (currentXP / xpToNextLevel) * 100;
  const levelName = getLevelName(level);

  return (
    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-6 shadow-lg border-4 border-white text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

      <div className="relative z-10">
        {/* Level Badge */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm opacity-90 mb-1">Current Level</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl font-black">{level}</h2>
              <span className="text-lg font-bold opacity-90">{levelName}</span>
            </div>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
        </div>

        {/* XP Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">XP Progress</span>
            </div>
            <span className="text-sm font-bold">
              {currentXP} / {xpToNextLevel} XP
            </span>
          </div>
          <div className="bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Total XP */}
        <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Total XP</span>
            </div>
            <span className="text-lg font-black">{totalXP.toLocaleString()}</span>
          </div>
        </div>

        {/* Level Up Hint */}
        {xpToNextLevel - currentXP <= 50 && (
          <div className="mt-4 bg-yellow-400/30 rounded-xl p-3 text-center backdrop-blur-sm border border-yellow-300/50">
            <p className="text-sm font-bold">
              🎉 Only {xpToNextLevel - currentXP} XP until Level {level + 1}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function getLevelName(level: number): string {
  if (level < 5) return 'Beginner';
  if (level < 10) return 'Explorer';
  if (level < 15) return 'Scholar';
  if (level < 20) return 'Master';
  if (level < 25) return 'Expert';
  if (level < 30) return 'Legend';
  return 'Mythic';
}
