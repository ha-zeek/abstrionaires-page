import Image from "next/image";
import Navbar from "./Navbar";

export default function Social() {
    return (
      <div>
        <Navbar />
        <div className="relative">
          {/* <Image 
            src="/images/backgrounds/main.png" 
            alt="Social"
            width={1920}
            height={1080}
            quality={100}
            className="w-full h-auto object-cover"        
          /> */}
          <div className="absolute top-0 left-0 right-0 flex justify-left pt-8">
            <div className="bg-black/50 text-white text-4xl font-bold p-4 rounded-lg">
              Social
            </div>
          </div>
        </div>
      </div>
    );
  }