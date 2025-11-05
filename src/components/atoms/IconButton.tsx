"use client";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  label?: string;
  active?: boolean;
  className?: string;
  disabled?: boolean;
}

export function IconButton({
  icon,
  onClick,
  label,
  active = false,
  className,
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        active
          ? "bg-blue-100 text-blue-600"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className || ""}`}
      aria-label={label}
    >
      {icon}
      {label && <span className="text-sm font-medium">{label}</span>}
    </button>
  );
}
