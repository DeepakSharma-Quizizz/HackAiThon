import { StudentHeader } from '@/app/components/StudentHeader';
import { MiniGames } from '@/app/components/MiniGames';
import { QuizizzJourney } from '@/app/components/QuizizzJourney';
import { PerformanceInsights } from '@/app/components/PerformanceInsights';
import { Achievements } from '@/app/components/Achievements';
import { QbitCompanion } from '@/app/components/QbitCompanion';
// import { LevelSystem } from '@/app/components/LevelSystem';
// import { DailyChallenge } from '@/app/components/DailyChallenge';
// import { Leaderboard } from '@/app/components/Leaderboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <StudentHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mini Games Section */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <MiniGames />
            </div>

            {/* Quizizz Journey */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <QuizizzJourney />
            </div>

            {/* Performance Insights */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <PerformanceInsights />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Qbit Companion */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
              <QbitCompanion />
            </div>

            {/* Level System */}
            {/* <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
              <LevelSystem level={12} currentXP={750} xpToNextLevel={1000} totalXP={12500} />
            </div> */}

            {/* Daily Challenges */}
            {/* <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <DailyChallenge />
            </div> */}

            {/* Achievements */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <Achievements />
            </div>

            {/* Leaderboard */}
            {/* <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-400">
              <Leaderboard />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
