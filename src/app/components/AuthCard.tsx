import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { HobbioLogo } from "./HobbioLogo";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
  showLogo?: boolean;
}

export const AuthCard = ({ children, className, showLogo = true }: AuthCardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hitme-from via-hitme-via to-hitme-to flex items-center justify-center p-4">
      {showLogo && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <HobbioLogo />
        </div>
      )}
      
      <Card className={cn(
        "w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm",
        className
      )}>
        <CardContent className="p-8">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};