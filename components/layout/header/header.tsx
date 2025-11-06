import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            WB Cars
          </div>
          <div className="hidden md:flex space-x-6">
            {/* Tu będzie menu nawigacyjne */}
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Usługi</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Kontakt</a>
          </div>
        </nav>
        {children}
      </div>
    </header>
  );
}