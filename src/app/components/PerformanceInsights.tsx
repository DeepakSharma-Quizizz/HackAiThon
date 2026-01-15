import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { BookCharacter, LightBulb, TrophyIcon, ChartIcon, MathIcon, ScienceIcon, HistoryIcon, EnglishIcon, GeographyIcon } from './CartoonIllustrations';

const getSubjectIcon = (subject: string) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'Math': MathIcon,
    'Science': ScienceIcon,
    'History': HistoryIcon,
    'English': EnglishIcon,
    'Geography': GeographyIcon,
  };
  return iconMap[subject] || BookCharacter;
};

const subjectData = [
  { subject: 'Math', accuracy: 92, color: '#3b82f6', status: 'strong' },
  { subject: 'Science', accuracy: 88, color: '#10b981', status: 'strong' },
  { subject: 'History', accuracy: 95, color: '#8b5cf6', status: 'strong' },
  { subject: 'English', accuracy: 85, color: '#f59e0b', status: 'improving' },
  { subject: 'Geography', accuracy: 78, color: '#06b6d4', status: 'needs_work' },
];

export function PerformanceInsights() {
  const [viewMode, setViewMode] = useState<'bar' | 'radar'>('bar');

  const strongSubjects = subjectData.filter(s => s.accuracy >= 90);
  const needsWork = subjectData.filter(s => s.accuracy < 85);

  return (
    <section className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <ChartIcon className="w-6 h-5 text-purple-500" />
          <span>Performance Insights</span>
        </h2>
        <div className="flex gap-2 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setViewMode('bar')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              viewMode === 'bar'
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => setViewMode('radar')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              viewMode === 'radar'
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Radar
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
        {viewMode === 'bar' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {subjectData.map((subject) => {
              const circumference = 2 * Math.PI * 36; // radius = 36
              const offset = circumference - (subject.accuracy / 100) * circumference;
              const isStrong = subject.accuracy >= 90;
              const isImproving = subject.accuracy >= 85 && subject.accuracy < 90;
              
              return (
                <div 
                  key={subject.subject} 
                  className="bg-white rounded-2xl p-4 shadow-sm border-2 border-gray-100 hover:border-purple-200 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col items-center">
                    {/* Circular Progress Ring */}
                    <div className="relative w-24 h-24 mb-3">
                      <svg className="transform -rotate-90 w-24 h-24">
                        {/* Background circle */}
                        <circle
                          cx="48"
                          cy="48"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-gray-200"
                        />
                        {/* Progress circle */}
                        <circle
                          cx="48"
                          cy="48"
                          r="36"
                          stroke={subject.color}
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          className="transition-all duration-700"
                          style={{ filter: 'drop-shadow(0 0 3px ' + subject.color + '40)' }}
                        />
                      </svg>
                      {/* Center content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {(() => {
                          const IconComponent = getSubjectIcon(subject.subject);
                          return <IconComponent className="w-6 h-6 text-current" style={{ color: subject.color }} />;
                        })()}
                        <span className="text-xs font-bold text-gray-700 mt-0.5">{subject.accuracy}%</span>
                      </div>
                    </div>
                    {/* Subject name and status */}
                    <div className="text-center">
                      <div className="font-bold text-sm text-gray-800 mb-1">{subject.subject}</div>
                      <div className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isStrong 
                          ? 'bg-green-100 text-green-700' 
                          : isImproving 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {isStrong ? 'Excellent' : isImproving ? 'Good' : 'Keep Going'}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Radar Grid */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#e5e7eb" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Radar Lines */}
              {subjectData.map((_, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const x = 100 + 80 * Math.cos(angle);
                const y = 100 + 80 * Math.sin(angle);
                return (
                  <line
                    key={index}
                    x1="100"
                    y1="100"
                    x2={x}
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Data Polygon */}
              <polygon
                points={subjectData.map((subject, index) => {
                  const angle = (index * 72 - 90) * (Math.PI / 180);
                  const radius = (subject.accuracy / 100) * 80;
                  const x = 100 + radius * Math.cos(angle);
                  const y = 100 + radius * Math.sin(angle);
                  return `${x},${y}`;
                }).join(' ')}
                fill="#8b5cf6"
                fillOpacity="0.3"
                stroke="#8b5cf6"
                strokeWidth="2"
              />

              {/* Labels */}
              {subjectData.map((subject, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const x = 100 + 95 * Math.cos(angle);
                const y = 100 + 95 * Math.sin(angle);
                return (
                  <text
                    key={subject.subject}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-medium fill-gray-700"
                  >
                    {subject.emoji}
                  </text>
                );
              })}
            </svg>
          </div>
        )}
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Strong Subjects */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-green-800">You're crushing it!</h3>
            </div>
          <div className="space-y-2">
            {strongSubjects.map((subject) => {
              const IconComponent = getSubjectIcon(subject.subject);
              return (
                <div key={subject.subject} className="flex items-center gap-2">
                  <IconComponent className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    {subject.subject}: {subject.accuracy}%
                  </span>
                </div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Needs Work */}
        {needsWork.length > 0 && (
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-3 border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-orange-800">Room to grow 🌱</h3>
            </div>
            <div className="space-y-2">
              {needsWork.map((subject) => {
                const IconComponent = getSubjectIcon(subject.subject);
                return (
                  <div key={subject.subject} className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-orange-700">
                      {subject.subject}: {subject.accuracy}%
                    </span>
                  </div>
                );
              })}
              <p className="text-xs text-orange-600 mt-2 italic">
                A few more practice rounds and you'll be unstoppable!
              </p>
            </div>
          </div>
        )}

        {/* All Strong Message */}
        {needsWork.length === 0 && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-purple-800">All subjects strong! 🌟</h3>
            </div>
            <p className="text-sm text-purple-700">
              You're doing amazing across all subjects! Keep up the fantastic work!
            </p>
          </div>
        )}
      </div>

      {/* Motivational Footer */}
      <div className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 text-white text-center">
        <p className="font-semibold">
          ✨ Your average accuracy is {Math.round(subjectData.reduce((acc, curr) => acc + curr.accuracy, 0) / subjectData.length)}% — that's awesome!
        </p>
      </div>
    </section>
  );
}