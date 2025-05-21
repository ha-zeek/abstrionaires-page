import Image from "next/image";

export default function Hero() {
    return (
      <div className="bg-background-main">

        <div className="bg-transparent text-white text-4xl font-bold">
          Welcome Abstrionaires , Embrace the DARK Realm
        </div>

          <Image 
          src="/images/backgrounds/main.png" 
          alt="Hero"
          width={1920}
          height={1080}
          quality={100} // <- Increase image quality
          className="w-full h-auto object-cover"        
            />
      </div>
    );
  }