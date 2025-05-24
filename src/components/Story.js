import Image from "next/image";
import Navbar from "./Navbar";

import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-space-grotesk',
  })

export default function Story() {
    return (
      <div>
        <Navbar />
        <div className="relative min-h-screen">
          {/* <Image 
            src="/images/backgrounds/main.png" 
            alt="Story"
            width={1920}
            height={1080}
            quality={100}
            className="w-full h-full object-cover absolute inset-0"        
          /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`${spaceGrotesk.className} bg-black/50 text-white text-xl p-8 rounded-lg max-w-3xl mx-auto`}>
              <h1 className="text-4xl font-bold mb-6">💀 THE STORY BEGINS</h1>
              
              <p className="italic mb-6">
                &ldquo;Everyone wants to be a millionaire…<br />
                …but few are prepared to fight for it.&rdquo;
              </p>

              <div className="space-y-4">
                <p>
                  In the quiet glow of the Abstract Realm, rare and powerful creatures once thrived — symbols of fortune, freedom, and fate.
                </p>
                <p>
                  But peace never lasts.
                </p>
                <p>
                  From the shadows of a darker dimension, The Mastermind has emerged — cloaked in deception, setting traps in silence. Driven by greed, they&apos;ve begun kidnapping the valuable mascots of Abstract — pulling them into a twisted, eerie realm ruled by cunning and risk.
                </p>
                <p>
                  Each loss pulls the Abstract Realm closer to collapse.
                </p>
                <p>
                  And no one is safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }