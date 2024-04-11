import React from "react";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <>
      <button
        className={`cursor-pointer transition-all px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
