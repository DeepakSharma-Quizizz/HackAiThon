import { Target, CheckCircle2, Clock, Zap } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  progress: number;
  target: number;
  reward: string;
  completed: boolean;
  icon: string;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Answer 10 Questions',
    description: 'Complete any quiz with at least 10 questions',
    progress: 7,
    target: 10,
    reward: '50 XP',
    completed: false,
    icon: '🎯',
  },
  {
    id: 2,
    title: 'Perfect Score',
    description: 'Get 100% accuracy on any quiz',
    progress: 0,
    target: 1,
    reward: '100 XP + Badge',
    completed: false,
    icon: '💯',
  },
  {
    id: 3,
    title: 'Play 3 Games',
    description: 'Complete 3 mini games today',
    progress: 2,
    target: 3,
    reward: '75 XP',
    completed: false,
    icon: '🎮',
  },
];

export function DailyChallenge() {
  const completedCount = challenges.filter(c => c.completed).length;
  const totalChallenges = challenges.length;

  return (
    <section className="bg-white rounded-3xl p-6 shadow-lg border-4 border-green-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Daily Challenges</h2>
            <p className="text-sm text-gray-600">Complete challenges to earn rewards!</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-green-600">{completedCount}/{totalChallenges}</div>
          <div className="text-xs text-gray-600">Completed</div>
        </div>
      </div>

      <div className="space-y-3">
        {challenges.map((challenge) => {
          const percentage = Math.min((challenge.progress / challenge.target) * 100, 100);
          const isCompleted = challenge.completed || challenge.progress >= challenge.target;

          return (
            <div
              key={challenge.id}
              className={`bg-gradient-to-br ${
                isCompleted
                  ? 'from-green-50 to-emerald-50 border-green-200'
                  : 'from-gray-50 to-gray-100 border-gray-200'
              } rounded-2xl p-4 border-2 transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl">{challenge.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold ${isCompleted ? 'text-green-800' : 'text-gray-800'}`}>
                      {challenge.title}
                    </h3>
                    {isCompleted && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span className="font-semibold text-yellow-600">Reward: {challenge.reward}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">
                    {challenge.progress} / {challenge.target}
                  </span>
                  <span className={`font-bold ${isCompleted ? 'text-green-600' : 'text-gray-600'}`}>
                    {isCompleted ? 'Completed!' : `${Math.round(percentage)}%`}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${
                      isCompleted
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                        : 'bg-gradient-to-r from-blue-400 to-purple-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Timer */}
      <div className="mt-4 pt-4 border-t-2 border-gray-100">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>New challenges reset in 12 hours</span>
        </div>
      </div>
    </section>
  );
}
