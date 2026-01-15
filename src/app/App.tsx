import { StudentHeader } from '@/app/components/StudentHeader';
import { MiniGames } from '@/app/components/MiniGames';
import { QuizizzJourney } from '@/app/components/QuizizzJourney';
import { PerformanceInsights } from '@/app/components/PerformanceInsights';
import { Achievements } from '@/app/components/Achievements';
import { QbitCompanion } from '@/app/components/QbitCompanion';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <StudentHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mini Games Section */}
            <MiniGames />

            {/* Quizizz Journey */}
            <QuizizzJourney />

            {/* Performance Insights */}
            <PerformanceInsights />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Achievements */}
            <Achievements />

            {/* Qbit Companion */}
            <QbitCompanion />
          </div>
        </div>
      </div>
    </div>
  );
}
