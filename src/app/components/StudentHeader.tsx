import { Settings, Bell } from 'lucide-react';
import { FloatingStar } from './CartoonIllustrations';

export function StudentHeader() {
  return (
    <header className="bg-white border-b-4 border-purple-200 shadow-sm sticky top-0 z-50 relative overflow-hidden">
      {/* Fun background decorations */}
      <div className="absolute top-2 right-20 opacity-10">
        <FloatingStar className="w-8 h-8 text-purple-300" />
      </div>
      <div className="absolute bottom-2 left-32 opacity-10">
        <FloatingStar className="w-6 h-6 text-pink-300" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo & Greeting */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
              <span className="text-2xl transform -rotate-6">🎮</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hey, Alex! 👋
              </h1>
              <p className="text-sm text-gray-600">Ready to level up today?</p>
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
              <span className="text-xl">🦸</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
