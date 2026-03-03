import React from 'react';

interface AffiliateBadgeProps {
  discountPercentage?: number;
  isVerified?: boolean;
  clickCount?: number;
  lastUpdated?: string;
  successRate?: number;
  isLimitedTime?: boolean;
  remainingCodes?: number;
}

const AffiliateBadge: React.FC<AffiliateBadgeProps> = ({
  discountPercentage,
  isVerified,
  clickCount,
  lastUpdated,
  successRate,
  isLimitedTime,
  remainingCodes
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 mt-1 sm:mt-2">
      {/* Discount Badge */}
      {discountPercentage && (
        <div className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] sm:text-xs font-medium">
          Save {discountPercentage}%
        </div>
      )}

      {/* Verified Badge */}
      {isVerified && (
        <div className="hidden sm:flex px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified
        </div>
      )}

      {/* Popularity Badge */}
      {clickCount && clickCount > 100 && (
        <div className="hidden sm:flex px-2 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          Popular
        </div>
      )}

      {/* Success Rate Badge */}
      {successRate && (
        <div className="hidden sm:block px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium">
          {successRate}% Success Rate
        </div>
      )}

      {/* Limited Time Badge */}
      {isLimitedTime && (
        <div className="px-2 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] sm:text-xs font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="sm:hidden">Limited</span>
          <span className="hidden sm:inline">Limited Time</span>
        </div>
      )}

      {/* Remaining Codes Badge */}
      {remainingCodes && (
        <div className="px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] sm:text-xs font-medium">
          <span className="sm:hidden">{remainingCodes} left</span>
          <span className="hidden sm:inline">{remainingCodes} Codes Left</span>
        </div>
      )}

      {/* Last Updated Badge */}
      {lastUpdated && (
        <div className="hidden sm:block px-2 py-1 rounded-full bg-gray-500/10 text-gray-500 text-xs font-medium">
          Updated {new Date(lastUpdated).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};

export default AffiliateBadge; 
