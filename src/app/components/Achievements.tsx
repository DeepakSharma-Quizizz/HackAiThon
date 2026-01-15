import { Trophy, Flame, Star, Zap, Award, Crown } from 'lucide-react';

const badges = [
  { id: 1, name: 'First Win', icon: '🏆', unlocked: true, color: 'from-yellow-400 to-orange-500' },
  { id: 2, name: 'Speed Demon', icon: '⚡', unlocked: true, color: 'from-purple-400 to-pink-500' },
  { id: 3, name: 'Perfect Score', icon: '💯', unlocked: true, color: 'from-green-400 to-emerald-500' },
  { id: 4, name: 'Streak Master', icon: '🔥', unlocked: true, color: 'from-red-400 to-orange-500' },
  { id: 5, name: 'Knowledge King', icon: '👑', unlocked: false, color: 'from-gray-300 to-gray-400' },
  { id: 6, name: 'Quiz Legend', icon: '⭐', unlocked: false, color: 'from-gray-300 to-gray-400' },
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
    <section className="space-y-4">
      {/* Streak Card */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 shadow-lg border-4 border-white text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Current Streak</h3>
            <Flame className="w-6 h-6" />
          </div>
          <div className="text-center mb-3">
            <div className="text-6xl font-black mb-2">{currentStreak}</div>
            <div className="text-sm opacity-90">days in a row! 🔥</div>
          </div>
          <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between text-sm">
              <span>Longest streak:</span>
              <span className="font-bold">{longestStreak} days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-yellow-100">
        <div className="flex items-center justify-between mb-4">
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
              <div className="text-3xl mb-1">{badge.icon}</div>
              <div className="text-xs font-bold text-white text-center leading-tight">
                {badge.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-4 border-purple-100">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-5 h-5 text-purple-500" />
          <h3 className="font-bold text-lg text-gray-800">Milestones</h3>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone) => {
            const percentage = Math.min((milestone.value / milestone.target) * 100, 100);
            const Icon = milestone.icon;

            return (
              <div key={milestone.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 ${colorClasses[milestone.color]} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {milestone.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-800">
                    {milestone.value}/{milestone.target}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full ${colorClasses[milestone.color]} transition-all duration-500 rounded-full`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
