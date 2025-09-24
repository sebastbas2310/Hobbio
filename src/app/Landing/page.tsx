import { Button } from "@/app/components/ui/button";
import { HobbioLogo } from "@/app/components/HobbioLogo";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hitme-from via-hitme-via to-hitme-to">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <HobbioLogo />
        <Link href="/login">
          <Button className="rounded-full px-8">
            SIGN IN
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <Image
                  src="/assets/hero-character.png" // en /public/assets
                  alt="Cool character with hoodie and sunglasses"
                  width={400}
                  height={400}
                  className="w-full max-w-sm mx-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hobbio
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              Ingresa a la comunidad que más se adapta a tus gustos y 
              pensamientos. Inscríbete ya y encuentra la tuya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup">
                <Button className="rounded-full font-bold text-lg">
                  SIGN UP
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
