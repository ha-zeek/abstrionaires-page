import Image from "next/image";
import Navbar from "./Navbar";
import { Space_Grotesk } from 'next/font/google'
import DecryptedText from '@/animations/DecryptedText/DecryptedText';


const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-space-grotesk',
  })


export default function Hero() {
    return (
      <div>
        <Navbar />
        <div className="relative">
          <Image 
            src="/images/backgrounds/main.png" 
            alt="Hero"
            width={1920}
            height={1080}
            quality={100}
            className="w-full h-auto object-cover"        
          />
          <div className="absolute top-0 left-8 right-0 flex justify-left pt-8">

           <div style={{ marginTop: '4rem' }}>
            <DecryptedText
              text="Welcome Abstrionaires, Embrace the DARK Realm"
              speed={50}
              maxIterations={10}
              characters="ABCD1234!?" 
              animateOn="view"
              revealDirection="center"
              className={`${spaceGrotesk.className} text-white text-5xl font-bold rounded-lg`}
              parentClassName={`${spaceGrotesk.className} text-white text-5xl font-bold rounded-lg p-4`}
            />
            </div> 

            {/* <div className={`${spaceGrotesk.className} text-white text-5xl font-bold p-4 rounded-lg`}>
              Welcome Abstrionaires, Embrace the DARK Realm
            </div> */}
          </div>
        </div>
      </div>
    );
  }