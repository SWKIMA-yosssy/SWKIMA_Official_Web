import Hero from './components/layout/home/Hero'
import NewRelease from './components/layout/home/NewRelease'
import SocialLinks from './components/layout/home/SocialLinks'
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full">
        <NewRelease />
      </div>
      <div className="w-full">
        <SocialLinks />
      </div>
    </div>
  );
}
