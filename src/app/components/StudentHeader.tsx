import { Settings, Bell } from 'lucide-react';
import { GameController, WavingHand, HeroCharacter } from './CartoonIllustrations';

export function StudentHeader() {
  return (
    <header className="bg-white border-b-2 border-purple-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Greeting */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
              <GameController className="w-6 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 flex items-center gap-1.5">
                <span>Hey, Alex!</span>
                <WavingHand className="w-5 h-6 text-purple-500" />
              </h1>
              <p className="text-xs text-gray-600">Ready to level up today?</p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl hover:bg-purple-50 transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2.5 rounded-xl hover:bg-purple-50 transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
              <HeroCharacter className="w-7 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
