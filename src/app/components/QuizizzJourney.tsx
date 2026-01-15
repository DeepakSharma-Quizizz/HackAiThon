import { useState } from 'react';
import { Calendar, Trophy, Target, TrendingUp } from 'lucide-react';

const journeyData = {
  5: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', emoji: '📐', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', emoji: '🔬', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', emoji: '📚', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', emoji: '📝', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', emoji: '🌍', color: 'cyan' },
  ],
  10: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', emoji: '📐', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', emoji: '🔬', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', emoji: '📚', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', emoji: '📝', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', emoji: '🌍', color: 'cyan' },
    { id: 6, game: 'Physics Fun', subject: 'Science', accuracy: 87, date: '5 days ago', emoji: '⚡', color: 'yellow' },
    { id: 7, game: 'Math Sprint', subject: 'Mathematics', accuracy: 93, date: '6 days ago', emoji: '🧮', color: 'blue' },
    { id: 8, game: 'Bio Battle', subject: 'Science', accuracy: 91, date: '7 days ago', emoji: '🧬', color: 'green' },
    { id: 9, game: 'Grammar Game', subject: 'English', accuracy: 89, date: '8 days ago', emoji: '✍️', color: 'orange' },
    { id: 10, game: 'Ancient Quest', subject: 'History', accuracy: 94, date: '9 days ago', emoji: '🏛️', color: 'purple' },
  ],
  30: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', emoji: '📐', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', emoji: '🔬', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', emoji: '📚', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', emoji: '📝', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', emoji: '🌍', color: 'cyan' },
    { id: 6, game: 'Physics Fun', subject: 'Science', accuracy: 87, date: '5 days ago', emoji: '⚡', color: 'yellow' },
    { id: 7, game: 'Math Sprint', subject: 'Mathematics', accuracy: 93, date: '1 week ago', emoji: '🧮', color: 'blue' },
    { id: 8, game: 'Bio Battle', subject: 'Science', accuracy: 91, date: '2 weeks ago', emoji: '🧬', color: 'green' },
    { id: 9, game: 'Grammar Game', subject: 'English', accuracy: 89, date: '2 weeks ago', emoji: '✍️', color: 'orange' },
    { id: 10, game: 'Ancient Quest', subject: 'History', accuracy: 94, date: '3 weeks ago', emoji: '🏛️', color: 'purple' },
  ],
};

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  cyan: 'bg-cyan-500',
  yellow: 'bg-yellow-500',
};

export function QuizizzJourney() {
  const [activeFilter, setActiveFilter] = useState<5 | 10 | 30>(5);
  const items = journeyData[activeFilter];

  return (
    <section className="bg-white rounded-3xl p-6 shadow-lg border-4 border-purple-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-3xl">🚀</span>
          Your Learning Journey
        </h2>
        <Calendar className="w-6 h-6 text-purple-500" />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 bg-gray-100 rounded-2xl p-1.5">
        {[
          { days: 5 as const, label: 'Last 5 days' },
          { days: 10 as const, label: 'Last 10 days' },
          { days: 30 as const, label: 'Last 30 days' },
        ].map((filter) => (
          <button
            key={filter.days}
            onClick={() => setActiveFilter(filter.days)}
            className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeFilter === filter.days
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Journey Timeline */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer group border-2 border-transparent hover:border-purple-200"
          >
            <div className="flex items-center gap-4">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                {index < items.length - 1 && (
                  <div className="w-0.5 h-8 bg-purple-200 my-1"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {item.game}
                    </h3>
                    <p className="text-sm text-gray-600">{item.subject}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2.5 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colorClasses[item.color]} transition-all duration-500`}
                      style={{ width: `${item.accuracy}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center gap-1">
                    {item.accuracy >= 90 ? (
                      <Trophy className="w-4 h-4 text-yellow-500" />
                    ) : item.accuracy >= 85 ? (
                      <Target className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                    )}
                    <span className="font-bold text-sm text-gray-700">
                      {item.accuracy}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
