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
  successRate,
  isLimitedTime,
  remainingCodes,
  // Verified, popularity (clickCount), and last-updated date are intentionally
  // not rendered here: verified is shown inline as a tick next to the card
  // title, last-updated lives in the footer, and "Popular" was decorative
  // chrome. Keeping only commercial badges that carry actionable info.
}) => {
  const hasAny =
    (typeof discountPercentage === "number" && discountPercentage > 0) ||
    (typeof successRate === "number" && successRate > 0) ||
    isLimitedTime ||
    (typeof remainingCodes === "number" && remainingCodes > 0);

  if (!hasAny) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
      {/* Discount Badge */}
      {typeof discountPercentage === "number" && discountPercentage > 0 && (
        <div className="px-1.5 py-0.5 rounded-md bg-accent-pink/10 text-accent-pink text-[10px] font-medium">
          Save {discountPercentage}%
        </div>
      )}

      {/* Success Rate Badge */}
      {typeof successRate === "number" && successRate > 0 && (
        <div className="px-1.5 py-0.5 rounded-md bg-accent-pink/10 text-accent-pink text-[10px] font-medium">
          {successRate}% success
        </div>
      )}

      {/* Limited Time Badge */}
      {isLimitedTime && (
        <div className="px-1.5 py-0.5 rounded-md bg-accent-pink/10 text-accent-pink text-[10px] font-medium">
          Limited
        </div>
      )}

      {/* Remaining Codes Badge */}
      {typeof remainingCodes === "number" && remainingCodes > 0 && (
        <div className="px-1.5 py-0.5 rounded-md bg-black/[0.05] dark:bg-white/[0.06] text-black/65 dark:text-white/65 text-[10px] font-medium">
          {remainingCodes} left
        </div>
      )}
    </div>
  );
};

export default AffiliateBadge; 
