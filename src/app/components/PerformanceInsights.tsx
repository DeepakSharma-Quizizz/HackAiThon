import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';
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
  const strongSubjects = subjectData.filter(s => s.accuracy >= 90);
  const needsWork = subjectData.filter(s => s.accuracy < 85);

  return (
    <section className="bg-white rounded-xl border-2 border-blue-100 shadow-md p-4 relative overflow-hidden">
      <div className="absolute top-4 right-4 opacity-10">
        <BookCharacter className="w-16 h-20 text-purple-400" />
      </div>
      <div className="relative z-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
          <ChartIcon className="w-5 h-4 text-purple-500" />
          <span>Performance</span>
        </h2>
      </div>

      {/* Chart */}
      <div className="mb-3 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-3">
        <div className="grid grid-cols-5 gap-2">
          {subjectData.map((subject) => {
            return (
              <div 
                key={subject.subject} 
                className="text-center"
              >
                {/* Circular Progress Ring */}
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="transform -rotate-90 w-16 h-16">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke={subject.color}
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 28}
                      strokeDashoffset={2 * Math.PI * 28 * (1 - subject.accuracy / 100)}
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">{subject.accuracy}%</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-700">{subject.subject}</div>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      {strongSubjects.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="font-medium">Strong: {strongSubjects.map(s => s.subject).join(', ')}</span>
          </div>
        </div>
      )}
    </section>
  );
}