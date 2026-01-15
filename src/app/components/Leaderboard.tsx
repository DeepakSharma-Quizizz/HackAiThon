import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  id: number;
  rank: number;
  name: string;
  avatar: string;
  score: number;
  isCurrentUser: boolean;
  change?: 'up' | 'down' | 'same';
}

const leaderboardData: LeaderboardEntry[] = [
  { id: 1, rank: 1, name: 'Sarah Chen', avatar: '👑', score: 12500, isCurrentUser: false, change: 'up' },
  { id: 2, rank: 2, name: 'Alex Johnson', avatar: '🦸', score: 11800, isCurrentUser: true, change: 'up' },
  { id: 3, rank: 3, name: 'Maya Patel', avatar: '🌟', score: 11200, isCurrentUser: false, change: 'down' },
  { id: 4, rank: 4, name: 'Jordan Lee', avatar: '⚡', score: 10800, isCurrentUser: false, change: 'same' },
  { id: 5, rank: 5, name: 'Taylor Kim', avatar: '🎯', score: 10200, isCurrentUser: false, change: 'up' },
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
  if (rank === 3) return <Award className="w-5 h-5 text-orange-500" />;
  return null;
};

const getRankColor = (rank: number) => {
  if (rank === 1) return 'from-yellow-400 to-orange-500';
  if (rank === 2) return 'from-gray-300 to-gray-400';
  if (rank === 3) return 'from-orange-400 to-red-500';
  return 'from-blue-400 to-purple-500';
};

export function Leaderboard() {
  const currentUser = leaderboardData.find(entry => entry.isCurrentUser);
  const topThree = leaderboardData.slice(0, 3);
  const others = leaderboardData.slice(3);

  return (
    <section className="bg-white rounded-3xl p-6 shadow-lg border-4 border-yellow-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
            <p className="text-sm text-gray-600">Weekly Rankings</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-purple-600">
            #{currentUser?.rank || '?'}
          </div>
          <div className="text-xs text-gray-600">Your Rank</div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
        {topThree.map((entry, index) => {
          const isSecond = entry.rank === 2;
          const isFirst = entry.rank === 1;
          const isThird = entry.rank === 3;

          return (
            <div
              key={entry.id}
              className={`bg-gradient-to-br ${getRankColor(entry.rank)} rounded-2xl p-4 text-white ${
                isFirst ? 'order-2 transform scale-110' : isSecond ? 'order-1' : 'order-3'
              } ${entry.isCurrentUser ? 'ring-4 ring-purple-300' : ''}`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{entry.avatar}</div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {getRankIcon(entry.rank)}
                  <span className="text-xs font-bold">#{entry.rank}</span>
                </div>
                <div className="text-sm font-bold mb-1 truncate">{entry.name}</div>
                <div className="text-xs opacity-90">{entry.score.toLocaleString()} pts</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Other Rankings */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-600 mb-3">More Rankings</h3>
        {others.map((entry) => (
          <div
            key={entry.id}
            className={`flex items-center gap-3 p-3 rounded-xl ${
              entry.isCurrentUser
                ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200'
                : 'bg-gray-50 hover:bg-gray-100'
            } transition-all duration-200`}
          >
            <div className="text-2xl font-bold text-gray-400 w-8 text-center">
              #{entry.rank}
            </div>
            <div className="text-2xl">{entry.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`font-semibold ${entry.isCurrentUser ? 'text-purple-700' : 'text-gray-800'}`}>
                  {entry.name}
                </span>
                {entry.isCurrentUser && (
                  <span className="text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full font-bold">
                    You
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-600">{entry.score.toLocaleString()} points</div>
            </div>
            {entry.change && (
              <div className="flex items-center gap-1">
                {entry.change === 'up' && (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                )}
                {entry.change === 'down' && (
                  <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
        View Full Leaderboard →
      </button>
    </section>
  );
}
