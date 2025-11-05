import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div
      className={`${
        sizes[size]
      } rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${
        className || ""
      }`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size === "sm" ? 32 : size === "md" ? 40 : 64}
          height={size === "sm" ? 32 : size === "md" ? 40 : 64}
          className="w-full h-full object-cover"
          unoptimized={src.includes(".svg") || src.includes("dicebear")}
        />
      ) : (
        <div className="w-full h-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
