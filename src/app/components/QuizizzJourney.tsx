import { useState } from 'react';
import { Calendar, Trophy, Target, TrendingUp } from 'lucide-react';
import { RocketShip, FloatingStar, MathIcon, ScienceIcon, HistoryIcon, EnglishIcon, GeographyIcon, BookCharacter } from './CartoonIllustrations';

const getSubjectIcon = (subject: string) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'Mathematics': MathIcon,
    'Math': MathIcon,
    'Science': ScienceIcon,
    'History': HistoryIcon,
    'English': EnglishIcon,
    'Geography': GeographyIcon,
  };
  return iconMap[subject] || BookCharacter;
};

const journeyData = {
  5: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', iconType: 'Math', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', iconType: 'Science', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', iconType: 'History', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', iconType: 'English', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', iconType: 'Geography', color: 'cyan' },
  ],
  10: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', iconType: 'Math', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', iconType: 'Science', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', iconType: 'History', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', iconType: 'English', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', iconType: 'Geography', color: 'cyan' },
    { id: 6, game: 'Physics Fun', subject: 'Science', accuracy: 87, date: '5 days ago', iconType: 'Science', color: 'yellow' },
    { id: 7, game: 'Math Sprint', subject: 'Mathematics', accuracy: 93, date: '6 days ago', iconType: 'Math', color: 'blue' },
    { id: 8, game: 'Bio Battle', subject: 'Science', accuracy: 91, date: '7 days ago', iconType: 'Science', color: 'green' },
    { id: 9, game: 'Grammar Game', subject: 'English', accuracy: 89, date: '8 days ago', iconType: 'English', color: 'orange' },
    { id: 10, game: 'Ancient Quest', subject: 'History', accuracy: 94, date: '9 days ago', iconType: 'History', color: 'purple' },
  ],
  30: [
    { id: 1, game: 'Math Challenge', subject: 'Mathematics', accuracy: 92, date: '2 hours ago', iconType: 'Math', color: 'blue' },
    { id: 2, game: 'Science Quiz', subject: 'Science', accuracy: 88, date: 'Yesterday', iconType: 'Science', color: 'green' },
    { id: 3, game: 'History Hunt', subject: 'History', accuracy: 95, date: '2 days ago', iconType: 'History', color: 'purple' },
    { id: 4, game: 'Vocab Master', subject: 'English', accuracy: 85, date: '3 days ago', iconType: 'English', color: 'orange' },
    { id: 5, game: 'Geo Explorer', subject: 'Geography', accuracy: 90, date: '4 days ago', iconType: 'Geography', color: 'cyan' },
    { id: 6, game: 'Physics Fun', subject: 'Science', accuracy: 87, date: '5 days ago', iconType: 'Science', color: 'yellow' },
    { id: 7, game: 'Math Sprint', subject: 'Mathematics', accuracy: 93, date: '1 week ago', iconType: 'Math', color: 'blue' },
    { id: 8, game: 'Bio Battle', subject: 'Science', accuracy: 91, date: '2 weeks ago', iconType: 'Science', color: 'green' },
    { id: 9, game: 'Grammar Game', subject: 'English', accuracy: 89, date: '2 weeks ago', iconType: 'English', color: 'orange' },
    { id: 10, game: 'Ancient Quest', subject: 'History', accuracy: 94, date: '3 weeks ago', iconType: 'History', color: 'purple' },
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
    <section className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <RocketShip className="w-6 h-8 text-purple-500" />
          <span>Your Learning Journey</span>
        </h2>
        <Calendar className="w-5 h-5 text-purple-500" />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4 bg-gray-100 rounded-xl p-1">
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
      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 hover:shadow-sm transition-all duration-200 cursor-pointer group border border-transparent hover:border-purple-200"
          >
            <div className="flex items-center gap-4">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {(() => {
                    const IconComponent = getSubjectIcon(item.iconType || item.subject);
                    return <IconComponent className="w-7 h-7 text-purple-600" />;
                  })()}
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

                {/* Visual Performance Indicator */}
                <div className="flex items-center gap-3">
                  {/* Circular mini progress */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <svg className="transform -rotate-90 w-12 h-12">
                      <circle
                        cx="24"
                        cy="24"
                        r="18"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="18"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 18}
                        strokeDashoffset={2 * Math.PI * 18 * (1 - item.accuracy / 100)}
                        strokeLinecap="round"
                        className={`transition-all duration-700 ${
                          item.accuracy >= 90 
                            ? 'text-yellow-500' 
                            : item.accuracy >= 85 
                            ? 'text-green-500' 
                            : 'text-blue-500'
                        }`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.accuracy >= 90 ? (
                        <Trophy className="w-4 h-4 text-yellow-500" />
                      ) : item.accuracy >= 85 ? (
                        <Target className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  </div>
                  
                  {/* Visual score blocks */}
                  <div className="flex-1 flex items-center gap-1">
                    {Array.from({ length: 10 }).map((_, i) => {
                      const filled = (i + 1) * 10 <= item.accuracy;
                      const partial = (i + 1) * 10 - 10 < item.accuracy && (i + 1) * 10 > item.accuracy;
                      return (
                        <div
                          key={i}
                          className={`flex-1 h-3 rounded-full transition-all duration-300 ${
                            filled
                              ? colorClasses[item.color]
                              : partial
                              ? `${colorClasses[item.color]} opacity-50`
                              : 'bg-gray-200'
                          }`}
                        ></div>
                      );
                    })}
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-gray-800 min-w-[3rem] text-right">
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
