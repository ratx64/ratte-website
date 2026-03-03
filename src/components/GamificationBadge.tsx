import React from 'react';

interface GamificationBadgeProps {
  streakCount?: number;
  pointsEarned?: number;
  nextReward?: string;
  isDealOfTheDay?: boolean;
  rank?: string;
}

const GamificationBadge: React.FC<GamificationBadgeProps> = ({
  streakCount,
  pointsEarned,
  nextReward,
  isDealOfTheDay,
  rank
}) => {
  return (
    <div className="hidden sm:flex flex-wrap items-center justify-end gap-1.5 mt-2">
      {/* Streak Badge */}
      {streakCount && streakCount > 0 && (
        <div className="px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {streakCount} Day Streak
        </div>
      )}

      {/* Points Badge */}
      {pointsEarned && (
        <div className="px-2 py-1 rounded-full bg-pink-500/10 text-pink-500 text-xs font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {pointsEarned} Points
        </div>
      )}

      {/* Next Reward Badge */}
      {nextReward && (
        <div className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-500 text-xs font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
          </svg>
          Next: {nextReward}
        </div>
      )}

      {/* Deal of the Day Badge */}
      {isDealOfTheDay && (
        <div className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          Deal of the Day
        </div>
      )}

      {/* Rank Badge */}
      {rank && (
        <div className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-medium">
          {rank} Rank
        </div>
      )}
    </div>
  );
};

export default GamificationBadge; 
