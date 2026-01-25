import React from 'react';

// Define props for the Header component
interface HeaderProps {
  toggleTheme: () => void; // Function to toggle the theme
  currentTheme: string;   // Current theme ('light' or 'dark')
}

/**
 * Header component displaying branding and theme toggle.
 */
const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="bg-transparent dark:bg-dark/70 backdrop-blur-sm p-2 sm:p-4 border-b border-transparent dark:border-steel/20 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-2 sm:px-4">
        <h1 className="text-lg sm:text-2xl font-bold text-black dark:text-white">Ratte</h1>
        <button 
          onClick={toggleTheme} 
          className="p-2 sm:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 bg-light/80 dark:bg-dark/80 text-dark/70 dark:text-light/70 hover:bg-light/90 dark:hover:bg-steel transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 