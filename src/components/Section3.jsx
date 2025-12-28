// import Sebastian from "../assets/Sebastian.png"
// import Javier from "../assets/Javier.png"
// import Milad from "../assets/Milad.png"
// import Ferhat from "../assets/Ferhat.png"
// import Polina from "../assets/Polina.png"
// import Erick from "../assets/Erick.png"
import Sebastian from "../assets/Sebastian.png"
import Javier from "../assets/Javier.png"
import Milad from "../assets/Milad.png"
import Ferhat from "../assets/Ferhat.png"
import Polina from "../assets/Polina.png"
import Erick from "../assets/Erick.png"
import Button from "../assets/components/Button"

const trendingNFTs = [
    { name: "Sebastian", img: Sebastian, handle: "Cyber Punk" },
    { name: "Ferhat Deniz", img: Ferhat, handle: "Abstract Art" },
    { name: "Javier Miranda", img: Javier, handle: "Metal Wave" },
    { name: "Polina Kondrashova", img: Polina, handle: "Future Human" },
    { name: "Milad Fakurian", img: Milad, handle: "Liquid Silver" },
    { name: "Erick Butler", img: Erick, handle: "Red Mask" },
];

export default function Section3() {
    return (
        <section className="relative mb-8">
            <div
                className="absolute z-0 pointer-events-none opacity-40 top-[10%] -left-[10%] rounded-full blur-[180px]"
                style={{ background: "radial-gradient(circle, #DD24E1 0%, #5117F4 100%)" }}
            />

            <div
                className="sm:hidden absolute h-[140%] md:h-[520px] w-full md:w-[454px] z-0 pointer-events-none transform -translate-x-150 -translate-y-1/2 left-1/2 top-1/2 overflow-hidden"
                style={{
                    background: "radial-gradient(ellipse at center, #DD24E1 0%, #5117F4 100%)",
                    filter: "blur(150px)",
                    borderRadius: "100%",
                    opacity: 0.7,
                }}
            />
            <div
                className="absolute h-[140%] md:h-[620px] transform -translate-x-1 translate-y-5 w-full md:w-[454px] z-0 pointer-events-none  right-0 bottom-0 overflow-hidden"
                style={{
                    background: "radial-gradient(ellipse at center, #DD24E1 0%, #5117F4 100%)",
                    filter: "blur(150px)",
                    borderRadius: "100%",
                    // opacity: 0.7,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 max-w-xl">
                    <h2 className="font-clash text-5xl md:text-[64px] font-semibold text-white leading-tight mb-4">
                        Trending This Week
                    </h2>
                    <p className="font-manrope text-gray-400 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* NFT GRID (2-column on desktop, staggered based on image) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {trendingNFTs.map((nft, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:mt-24' : ''}`}
                        >
                            <div className="mb-4">
                                <h3 className="font-clash text-white text-xl font-medium">{nft.name}</h3>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">{nft.handle}</p>
                            </div>

                            <div className="relative overflow-hidden rounded-[20px] aspect-[556/450]">
                                <img
                                    src={nft.img}
                                    alt={nft.name}
                                    className="w-full h-full object-cover "
                                />
                                {/* Border effect from Figma screenshot */}
                                <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none" />
                            </div>
                            {index === trendingNFTs.length - 1 && <div className="mt-8 flex justify-end">
                                <Button text="Explore More" />
                            </div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}