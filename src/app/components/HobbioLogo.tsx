import hobbioLogoImg from "../assets/hobbio-logo.png";

interface HobbioLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const HobbioLogo = ({ className = "", size = "md" }: HobbioLogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12", 
    lg: "h-16 w-16"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={hobbioLogoImg.src} 
        alt="HitMe" 
        className={`${sizeClasses[size]} object-contain`}
      />
      <div className="flex flex-col">
        <span className="text-hitme-logo font-bold text-xl tracking-tight">
          HOBBIO
        </span>
        <span className="text-hitme-logo/70 text-xs font-medium tracking-wider uppercase">
          MYSPACE
        </span>
      </div>
    </div>
  );
};