interface HeartIconProps {
  className?: string;
  isFilled?: boolean;
}

export function HeartIcon({
  className = "w-5 h-5",
  isFilled = false,
}: HeartIconProps) {
  return (
    <svg
      className={`${className} ${
        isFilled ? "fill-red-600" : "fill-white stroke-black"
      }`}
      viewBox="0 0 24 24"
      strokeWidth={isFilled ? 0 : 1.5}
      stroke={isFilled ? "none" : "black"}
    >
      <path
        fillRule="evenodd"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

