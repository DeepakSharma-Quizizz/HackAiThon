import { Swords, Sparkles, Users } from 'lucide-react';
import { FloatingStar, GameController } from './CartoonIllustrations';

const games = [
  {
    id: 1,
    name: 'Tug of War',
    tagline: 'Challenge your friends!',
    icon: '⚔️',
    gradient: 'from-red-400 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    action: 'Challenge',
    description: '1v1 multiplayer battle',
    iconComponent: Swords,
  },
  {
    id: 2,
    name: 'Quiz Maze',
    tagline: 'Navigate through knowledge',
    icon: '🎯',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    action: 'Start',
    description: 'Solo adventure mode',
    iconComponent: Sparkles,
  },
  {
    id: 3,
    name: 'Wheel Rush',
    tagline: 'Spin to win together!',
    icon: '🎡',
    gradient: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    action: 'Play',
    description: 'Multiplayer party game',
    iconComponent: Users,
  },
];

export function MiniGames() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <GameController className="w-6 h-5 text-purple-500" />
          <span>Mini Games</span>
        </h2>
        <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-2.5 py-1 rounded-full">
          3 Available
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {games.map((game) => (
          <div
            key={game.id}
            className={`bg-gradient-to-br ${game.bgGradient} rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-white relative overflow-hidden`}
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${game.gradient} rounded-xl flex items-center justify-center text-2xl shadow-md mb-3`}>
                {game.icon}
              </div>

              {/* Game Info */}
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">
                {game.name}
              </h3>
              <p className="text-xs text-gray-600 mb-2">{game.tagline}</p>

              {/* CTA Button */}
              <button
                className={`w-full bg-gradient-to-r ${game.gradient} text-white font-semibold py-2 px-3 rounded-lg hover:shadow-md transition-all duration-200 text-sm`}
              >
                {game.action} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
