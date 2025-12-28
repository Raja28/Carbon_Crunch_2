import Artist from "../components/Artist";
import Community from "../components/Community";
import HeroSection from "../components/HeroSection";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function HomePage() {
    return (
        <section className='w-11/12 mx-auto'>
            <HeroSection />
            <Section2 />
            <Section3 />
            <Artist />
            <Community />
           
        </section>
    )
}