import { Settings, Bell } from 'lucide-react';
import { GameController, WavingHand, HeroCharacter } from './CartoonIllustrations';

export function StudentHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b-2 border-purple-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
              <GameController className="w-5 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Hey, Alex!</h1>
              <p className="text-xs text-gray-500">Ready to learn today?</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <Bell className="w-4 h-4 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Settings className="w-4 h-4 text-gray-600" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
              <HeroCharacter className="w-5 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
