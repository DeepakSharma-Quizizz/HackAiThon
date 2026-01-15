import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';
import { useState } from 'react';

const subjectData = [
  { subject: 'Math', accuracy: 92, color: '#3b82f6', emoji: '📐', status: 'strong' },
  { subject: 'Science', accuracy: 88, color: '#10b981', emoji: '🔬', status: 'strong' },
  { subject: 'History', accuracy: 95, color: '#8b5cf6', emoji: '📚', status: 'strong' },
  { subject: 'English', accuracy: 85, color: '#f59e0b', emoji: '📝', status: 'improving' },
  { subject: 'Geography', accuracy: 78, color: '#06b6d4', emoji: '🌍', status: 'needs_work' },
];

export function PerformanceInsights() {
  const [viewMode, setViewMode] = useState<'bar' | 'radar'>('bar');

  const strongSubjects = subjectData.filter(s => s.accuracy >= 90);
  const needsWork = subjectData.filter(s => s.accuracy < 85);

  return (
    <section className="bg-white rounded-3xl p-6 shadow-lg border-4 border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-3xl">📊</span>
          Performance Insights
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
      <div className="mb-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
        {viewMode === 'bar' ? (
          <div className="space-y-4">
            {subjectData.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{subject.emoji}</span>
                    <span className="text-sm font-semibold text-gray-700">
                      {subject.subject}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-800">
                    {subject.accuracy}%
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${subject.accuracy}%`,
                      backgroundColor: subject.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strong Subjects */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-green-800">You're crushing it! 💪</h3>
          </div>
          <div className="space-y-2">
            {strongSubjects.map((subject) => (
              <div key={subject.subject} className="flex items-center gap-2">
                <span className="text-xl">{subject.emoji}</span>
                <span className="text-sm font-medium text-green-700">
                  {subject.subject}: {subject.accuracy}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Needs Work */}
        {needsWork.length > 0 && (
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 border-2 border-orange-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-orange-800">Room to grow 🌱</h3>
            </div>
            <div className="space-y-2">
              {needsWork.map((subject) => (
                <div key={subject.subject} className="flex items-center gap-2">
                  <span className="text-xl">{subject.emoji}</span>
                  <span className="text-sm font-medium text-orange-700">
                    {subject.subject}: {subject.accuracy}%
                  </span>
                </div>
              ))}
              <p className="text-xs text-orange-600 mt-2 italic">
                A few more practice rounds and you'll be unstoppable!
              </p>
            </div>
          </div>
        )}

        {/* All Strong Message */}
        {needsWork.length === 0 && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border-2 border-purple-200">
            <div className="flex items-center gap-2 mb-3">
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
      <div className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 text-white text-center">
        <p className="font-semibold">
          ✨ Your average accuracy is {Math.round(subjectData.reduce((acc, curr) => acc + curr.accuracy, 0) / subjectData.length)}% — that's awesome!
        </p>
      </div>
    </section>
  );
}