import ctaImage from "../assets/cta.png"

export default function Community() {
    return (
        <section className="relative w-full overflow-hidden min-h-[600px] flex items-center mb-8">

            <div
                className="absolute  h-[140%] md:h-[520px] w-full md:w-[454px] z-0 pointer-events-none transform -translate-x-120 -translate-y-1/4 left-1/2 top-1/2 overflow-hidden"
                style={{
                    background: "radial-gradient(ellipse at center, #DD24E1 0%, #5117F4 100%)",
                    filter: "blur(150px)",
                    borderRadius: "100%",
                    opacity: 1,
                }}
            />

            <div className="mb-4 relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center items-center justify-between gap-16">

                <div className="w-full md:w-1/2 flex items-center justify-center lg:justify-start">
                    <div className="relative">
                        <img
                            src={ctaImage}
                            alt="Join Community"
                            className="w-full max-w-[550px] aspect-square object-cover rounded-[20px]"
                        />
                        {/* Subtle inner border found in Figma cards */}
                        <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none" />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 md:text-left text-center">
                    <h2 className="font-clash text-2xl md:text-4xl  font-semibold text-white leading-[1.1] mb-8">
                        Join The Community <br />
                        And Get The Best NFT <br />
                        Collection
                    </h2>
                    <div className="flex justify-center ">
                        <button
                            className="
                            relative cursor-pointer
                            flex items-center justify-center
                            w-[254px] h-[59px]
            
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
                            JOIN COMMUNITY
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}