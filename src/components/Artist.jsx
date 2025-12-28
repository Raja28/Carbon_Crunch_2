import Ferhat_Artist from "../assets/Ferhat_Deniz.png"
import Sebastian_Artist from "../assets/sebastian_Artist.png"
import Javier_Artist from "../assets/Javier_Artist.png"
import Erick_Artist from "../assets/Erick_Artist.png"
import Button from "../assets/components/Button";

// import Ferhat_Artist from "../assets/Ferhat_Deniz.png"
// import Sebastian_Artist from "../assets/Sebastian_Artist.png"
// import Javier_Artist from "../assets/Javier_Artist.png"
// import Erick_Artist from "../assets/Erick_Artist.png"


const artists = [
  { name: "Ferhat Deniz", img: Ferhat_Artist },
  { name: "Sebastian", img: Sebastian_Artist },
  { name: "Javier Miranda", img: Javier_Artist },
  { name: "Erick Butler", img: Erick_Artist },
];

export default function Artist() {
  return (
    <section className="mt-20 mb-8 relative overflow-hidden">

      <div className="relative z-10  mx-auto">
        {/* Header Section with Button */}
        <div className="flex flex-wrap gap-4 md:flex-nowrap justify-center md:justify-between items-center mb-20">
          <h2 className="text-center font-clash text-white text-5xl md:text-[64px] font-semibold tracking-tight">
            Popular Artists
          </h2>
          
          <Button text={"View All Artist"} />
        </div>

        {/* Artist Avatars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {artists.map((artist, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              {/* Circular Avatar Container */}
              <div className="relative w-32 h-32  mb-8">
                <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#DD24E1]/50 transition-colors" />
                <img 
                  src={artist.img} 
                  alt={artist.name} 
                  className="w-full h-full object-cover rounded-full p-1"
                />
              </div>
              
              {/* Artist Name */}
              <h3 className="font-clash text-white text-lg md:text-[24px] font-medium text-center transition-colors group-hover:text-[#DD24E1]">
                {artist.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}