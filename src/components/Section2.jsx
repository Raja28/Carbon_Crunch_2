

import Button from "../assets/components/Button"
import CardImage from "../assets/section2.png"

export default function Section2() {
    return (
        <section className="mx-auto mb-8 text-white flex flex-col md:flex-row items-center justify-between">

            {/* Left Image Content (Image with Background Glow) */}
            <div className="w-full md:w-1/2 relative h-[500px] md:h-[646px] flex items-center justify-center order-1 md:order-1">
                <div
                    className="absolute h-[140%] md:h-[520px] w-full md:w-[454px] z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 overflow-hidden"
                    style={{
                        background: "radial-gradient(ellipse at center, #DD24E1 0%, #5117F4 100%)",
                        filter: "blur(150px)",
                        borderRadius: "100%",
                        opacity: 0.7,
                    }}
                />
                <div className="relative z-10">
                    <img
                        src={CardImage}
                        alt="Bitcoin Art Work"
                        className="w-full max-w-[496px] h-auto object-contain rounded-[20px] shadow-2xl"
                    />
                </div>
            </div>

            {/* Right Text Content (Auction Details) */}
            <div className="w-full md:w-1/2 z-10  mt-12 md:mt-0 md:pl-20 order-2 md:order-2">
                <h2 className="font-clash text-5xl md:text-[72px] font-semibold leading-[1.1] mb-2">
                    Bitcoin <br /> Art Work
                </h2>

                <p className="font-manrope text-sm text-gray-400 mb-10">
                    Created by <span className="text-[#DD24E1] cursor-pointer">Jonathan Borba</span>
                </p>

                {/* Bid and Auction Stats */}
                <div className="flex gap-10 mb-10 items-center">
                    <div className="border-r border-white/20 pr-10">
                        <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Current Bid</p>
                        <h3 className="text-2xl font-bold">1.09 ETH</h3>
                        <p className="text-gray-500 text-sm">$1,835</p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Auction Ends In</p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <h4 className="text-lg md:text-2xl font-bold">18</h4>
                                <span className="text-[8px] md:text-[10px] text-gray-500 uppercase">Hours</span>
                            </div>
                            <div className="text-center">
                                <h4 className="text-lg md:text-2xl font-bold">57</h4>
                                <span className="text-[8px] md:text-[10px] text-gray-500 uppercase">Minutes</span>
                            </div>
                            <div className="text-center">
                                <h4 className="text-lg md:text-2xl font-bold">14</h4>
                                <span className="text-[8px] md:text-[10px] text-gray-500 uppercase">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Button text="View Art Work" />
            </div>
        </section>
    )
}