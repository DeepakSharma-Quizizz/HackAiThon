import { useState } from 'react';
import { Calendar, Trophy, Target, TrendingUp, TrendingDown, ArrowUp, ArrowDown } from 'lucide-react';
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

// Calculate average accuracy for each period
const calculateAverageAccuracy = (items: typeof journeyData[5]) => {
  if (items.length === 0) return 0;
  const sum = items.reduce((acc, item) => acc + item.accuracy, 0);
  return Math.round(sum / items.length);
};

const accuracyStats = {
  5: calculateAverageAccuracy(journeyData[5]),
  10: calculateAverageAccuracy(journeyData[10]),
  30: calculateAverageAccuracy(journeyData[30]),
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
  const currentAccuracy = accuracyStats[activeFilter];
  
  // Calculate trend (comparing with previous period)
  const getTrend = () => {
    if (activeFilter === 5) {
      const diff = accuracyStats[5] - accuracyStats[10];
      return { value: Math.abs(diff), isPositive: diff >= 0, label: 'vs Last 10 days' };
    } else if (activeFilter === 10) {
      const diff = accuracyStats[10] - accuracyStats[30];
      return { value: Math.abs(diff), isPositive: diff >= 0, label: 'vs Last 30 days' };
    } else {
      // For 30 days, compare with overall average
      const avg = (accuracyStats[5] + accuracyStats[10] + accuracyStats[30]) / 3;
      const diff = accuracyStats[30] - avg;
      return { value: Math.abs(diff), isPositive: diff >= 0, label: 'vs Average' };
    }
  };
  
  const trend = getTrend();

  return (
    <section className="bg-white rounded-xl border-2 border-purple-100 shadow-md p-4 relative overflow-hidden">
      <div className="absolute top-4 right-4 opacity-10">
        <RocketShip className="w-14 h-18 text-purple-400" />
      </div>
      <div className="relative z-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
          <RocketShip className="w-5 h-6 text-purple-500" />
          <span>Learning Journey</span>
        </h2>
        <div className="flex gap-1 bg-gray-100 rounded p-0.5">
          {[
            { days: 5 as const, label: '5d' },
            { days: 10 as const, label: '10d' },
            { days: 30 as const, label: '30d' },
          ].map((filter) => (
            <button
              key={filter.days}
              onClick={() => setActiveFilter(filter.days)}
              className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                activeFilter === filter.days
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accuracy Comparison Cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { days: 5 as const, label: '5 Days', accuracy: accuracyStats[5] },
          { days: 10 as const, label: '10 Days', accuracy: accuracyStats[10] },
          { days: 30 as const, label: '30 Days', accuracy: accuracyStats[30] },
        ].map((period) => {
          const isActive = activeFilter === period.days;
          return (
            <div
              key={period.days}
              className={`rounded-lg p-2.5 border-2 transition-all ${
                isActive
                  ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300 shadow-sm'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="text-xs text-gray-600 mb-1">{period.label}</div>
              <div className={`text-lg font-black ${isActive ? 'text-purple-600' : 'text-gray-700'}`}>
                {period.accuracy}%
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="space-y-1.5 max-h-80 overflow-y-auto">
        {items.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors"
          >
            <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              {(() => {
                const IconComponent = getSubjectIcon(item.iconType || item.subject);
                return <IconComponent className="w-5 h-5 text-purple-600" />;
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{item.game}</div>
              <div className="text-xs text-gray-500">{item.subject} • {item.date}</div>
            </div>
            <div className="text-sm font-semibold text-gray-900">{item.accuracy}%</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
