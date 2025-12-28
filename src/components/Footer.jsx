import igImage from "../assets/ig.png"
import fbImage from "../assets/fb.png"
import twitterImage from "../assets/twitter.png"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="relativebg-[#0D0B0C] bg-blur-lg text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 sm:px-12 md:px-20 overflow-hidden">
            
            {/* PIXEL-PERFECT BACKGROUND GLOW */}
            {/* Scales down for mobile to prevent color washing */}
            {/* <div 
                className="absolute z-0 pointer-events-none opacity-40 md:opacity-60 -right-[20%] md:-right-[10%] -bottom-[30%] md:-bottom-[20%]"
                style={{
                    width: 'clamp(300px, 80vw, 654px)',
                    height: 'clamp(400px, 100vw, 820px)',
                    background: 'radial-gradient(circle, #DD24E1 0%, #5117F4 100%)',
                    filter: 'blur(150px) md:blur(260px)',
                    borderRadius: '100%',
                }}
            /> */}

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6 mb-12 md:mb-20  border-white/10 pb-12 md:pb-20">
                    
                    {/* Brand Logo */}
                    <div className="text-3xl md:text-4xl font-clash font-semibold tracking-tight text-center md:text-left">
                        NFTme
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm md:text-base font-manrope text-gray-400">
                        <Link to="#" className="hover:text-white transition-colors duration-300">Explore</Link>
                        <Link to="#" className="hover:text-white transition-colors duration-300">Marketplace</Link>
                        <Link to="#" className="hover:text-white transition-colors duration-300">Artists</Link>
                        <Link to="#" className="hover:text-white transition-colors duration-300">Contact</Link>
                    </nav>

                    {/* Circular Social Icons */}
                    <div className="flex items-center gap-4">
                        {[
                            { img: igImage, alt: "IG" },
                            { img: fbImage, alt: "FB" },
                            { img: twitterImage, alt: "Twitter" }
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href="#" 
                                className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(221,36,225,0.5)] transition-all"
                            >
                                <img src={social.img} alt={social.alt} className="w-5 h-5 object-contain" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* BOTTOM LEGAL ROW */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-manrope text-gray-500 uppercase tracking-[0.15em]">
                    <div className="flex items-center gap-3 md:gap-6 order-2 md:order-1">
                        <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                        <span className="opacity-30">|</span>
                        <a href="#" className="hover:text-white transition-colors">Terms of service</a>
                    </div>
                    
                    <div className="text-center md:text-right order-1 md:order-2">
                        Copyright @ Raja 2025. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}