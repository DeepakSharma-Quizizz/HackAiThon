import { Swords, Sparkles, Users } from 'lucide-react';

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
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-3xl">🎮</span>
          Mini Games
        </h2>
        <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1.5 rounded-full">
          3 Available
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className={`bg-gradient-to-br ${game.bgGradient} rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border-4 border-white relative overflow-hidden group`}
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${game.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                {game.icon}
              </div>

              {/* Game Info */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {game.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{game.tagline}</p>

              {/* Description Badge */}
              <div className="flex items-center gap-2 mb-4">
                <game.iconComponent className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-medium text-gray-600">
                  {game.description}
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full bg-gradient-to-r ${game.gradient} text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
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
