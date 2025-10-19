import React from 'react';

interface DashboardHeaderProps {
  label: string;
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ label }) => {
  return (
    <span className="py-1 px-2">
      <h1 aria-label={label} className="text-sm font-semibold leading-5 space-y-3 text-black">
        {label}
      </h1>
    </span>
  );
};

export default DashboardHeader;
