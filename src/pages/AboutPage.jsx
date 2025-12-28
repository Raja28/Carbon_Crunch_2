
import AboutImage from "../assets/cta.png"; // Reusing high-quality asset

export default function AboutPage() {
  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      
      <div 
        className="absolute z-0 pointer-events-none top-[-10%] left-[-10%]"
        style={{
          width: 'clamp(300px, 60vw, 654px)', 
          height: 'clamp(400px, 80vw, 820px)',
          background: 'radial-gradient(circle, #DD24E1 0%, #5117F4 100%)',
          filter: 'blur(200px)',
          borderRadius: '100%',
          opacity: 0.4, 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h1 className="font-clash text-5xl md:text-[72px] font-semibold leading-[1.1] mb-8">
              We Are Building <br />
              The Future Of <br />
              Digital Art
            </h1>
            <p className="font-manrope text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Our marketplace is a decentralized platform where creators and collectors 
              can interact safely. We use blockchain technology to ensure every piece 
              is unique and authenticated.
            </p>
            <button className="bg-gradient-to-r from-[#DD24E1] to-[#5117F4] px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:opacity-90 transition-all active:scale-95">
              Learn More
            </button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <img 
                src={AboutImage} 
                alt="About us" 
                className="w-full max-w-[550px] rounded-[20px] shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {[
            { label: "Artworks", value: "32k+" },
            { label: "Auctions", value: "20k+" },
            { label: "Artists", value: "10k+" },
            { label: "Total Volume", value: "540k ETH" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <h3 className="font-clash text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="font-manrope text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}