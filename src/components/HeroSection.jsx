
import HeroImage1 from "../assets/hero1.png" // The front card
import HeroImage2 from "../assets/hero2.png" // The back (tilted) card

export default function HeroSection() {
    return (
        <section className="mx-auto  text-white flex flex-wrap md:flex-nowrap items-center justify-between">
            {/* Left Content */}
            <div className="w-full z-10">
                <h1 className="font-clash text-4xl md:text-6xl font-semibold leading-[1.1] mb-6">
                    Discover Rare <br />
                    Collections Of <br />
                    Art & NFT’s
                </h1>

                <p className="font-manrope text-gray-400 text-lg mb-8">
                    Create, Explore, & Collect Digital Art NFTs
                </p>

                <button
                    className="
    relative cursor-pointer
    flex items-center justify-center
    w-[224px] h-[59px]
    font-semibold text-white text-[18px] tracking-wide

    bg-gradient-to-br from-[#DD24E1] to-[#5117F4]
    shadow-[0_0_25px_rgba(157,80,255,0.45)]

    transition-all duration-300
    hover:shadow-[0_0_35px_rgba(157,80,255,0.7)]
    active:scale-[0.98]

    sm:w-[200px] sm:h-[54px]
    xs:w-full xs:max-w-[224px]
  "
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 86% 100%, 0% 100%, 0% 0%)",
                        borderRadius: "10px 8px 40px 8px",
                    }}
                >
                    EXPLORE
                </button>

                {/* Stats */}
                <div className="flex gap-12 md:gap-16 mt-20 ">
                    <div>
                        <h3 className="font-clash text-2xl md:text-4xl font-bold">32k+</h3>
                        <p className="font-manrope text-gray-500 text-sm">Artwork</p>
                    </div>
                    <div>
                        <h3 className="font-clash text-2xl md:text-4xl font-bold">20k+</h3>
                        <p className="font-manrope text-gray-500 text-sm">Auctions</p>
                    </div>
                    <div>
                        <h3 className="font-clash text-2xl md:text-4xl font-bold">10k+</h3>
                        <p className="font-manrope text-gray-500 text-sm">Artists</p>
                    </div>
                </div>
            </div>

            {/* Right Content - The Overlapping Cards Container */}
            <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center lg:justify-end">

                {/* This is the inner wrapper that bounds the cards and the glow together */}
                <div className="relative group">

                    <div
                        className="absolute h-[140%] md:h-[520px] w-full md:w-[454px] z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 overflow-hidden"
                        style={{
                            // width: "454px",
                            // height: "520px",
                            background: "radial-gradient(ellipse at center, #DD24E1 0%, #5117F4 100%)",
                            filter: "blur(150px)",
                            borderRadius: "100%",
                            opacity: 0.7,
                        }}
                    />
                    {/* HeroImage2 (The tilted one in the back) */}
                    <div className="relative z-10 transform md:-rotate-12 -rotate-1 -translate-y-8 md:-translate-x-12 md:translate-y-4">
                        <img
                            src={HeroImage2}
                            alt="Back Card"
                            className="h-[330px] md:h-[430px] w-auto object-contain rounded-2xl "
                        />
                    </div>

                    {/* HeroImage1 (The straight one in front) */}
                    <div className="absolute z-20 inset-0 flex items-center justify-center">
                        <img
                            src={HeroImage1}
                            alt="Front Card"
                            className="h-[300px] md:h-[400px] w-auto object-contain rounded-2xl transform -translate-y-12 translate-x-4"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
