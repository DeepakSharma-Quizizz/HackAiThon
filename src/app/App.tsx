import { StudentHeader } from '@/app/components/StudentHeader';
import { MiniGames } from '@/app/components/MiniGames';
import { QuizizzJourney } from '@/app/components/QuizizzJourney';
import { PerformanceInsights } from '@/app/components/PerformanceInsights';
import { Achievements } from '@/app/components/Achievements';
import { QbitCompanion } from '@/app/components/QbitCompanion';
import { BackgroundDecorations, FloatingStar, TrophyIcon, BookCharacter, LightBulb } from '@/app/components/CartoonIllustrations';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative">
      {/* Background Cartoon Decorations */}
      <BackgroundDecorations />
      
      {/* Header */}
      <StudentHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-4">
            <MiniGames />
            <PerformanceInsights />
            <QuizizzJourney />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <QbitCompanion />
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}
